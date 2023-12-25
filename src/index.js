// import { render } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { store as coreDataStore } from '@wordpress/core-data';

//needed post title may contain HTML entities like &aacute;, so 
//we need to use the decodeEntities function to replace them
import { decodeEntities } from '@wordpress/html-entities';
import { useState, render } from '@wordpress/element';
//needed for Search Box above Page list. (Step 4)
import { 
    SearchControl, 
    Spinner, 
    Button,
    Modal,
    TextControl
} from '@wordpress/components';


/* 
function MyFirstApp() {
    return <span>Hello from JavaScript!</span>;
}
*/

const DeletePageButton = ({ pageId, onCancel, onSaveFinished }) => {
    // fortesting error messages.: pageId = pageId * 1000;
    const { getLastEntityDeleteError } = useSelect( coreDataStore )
    const { deleteEntityRecord } = useDispatch( coreDataStore );
    const { createSuccessNotice, createErrorNotice } = useDispatch( noticesStore );
   // const handleDelete = () => deleteEntityRecord( 'postType', 'page', pageId );
   const handleDelete = async () => {
    const success = await deleteEntityRecord( 'postType', 'page', pageId);
    
        if ( success ) {
            // Tell the user the operation succeeded:
            createSuccessNotice( "The page was deleted!", {
                type: 'snackbar',
            } );
            } else {
                const lastError = getLastEntityDeleteError( 'postType', 'page', pageId );
                const message = ( lastError?.message || 'There was an error.' ) + ' Please refresh the page and try again.'
                // Tell the user how exactly the operation has failed:
                createErrorNotice( message, {
                    type: 'snackbar',
                } );
        }
    }

    const { isDeleting } =  useSelect(
        select => ({ isDeleting: select( coreDataStore ).isDeletingEntityRecord( 'pageType', 'page', pageId )
    }), [ pageId ]
    );
    return (
        <Button 
            variant="primary" 
            onClick={ handleDelete }
            disabled={ isDeleting}
        >
        { isDeleting ? (
                <>
                    <Spinner />
                    Deleting...
                </>
            ) : 'Delete' }
        </Button>
    )
}



function CreatePageButton() {
    const [isOpen, setOpen] = useState( false );
    const openModal = () => setOpen( true );
    const closeModal = () => setOpen( false );
    return (
        <>
            <Button onClick={ openModal } variant="primary">
                Create a new Page
            </Button>
            { isOpen && (
                <Modal onRequestClose={ closeModal } title="Create a new page">
                    <CreatePageForm
                        onCancel={ closeModal }
                        onSaveFinished={ closeModal }
                    />
                </Modal>
            ) }
        </>
    );
}


function PageEditButton({ pageId }) {
    //right from the code examples in the Component Storybook
    const [isOpen, setOpen ] = useState ( false );
    const openModal = () => setOpen( true );
    const closeModal = () => setOpen( false );

    return (
        < >
        <Button onClick={ openModal } variant="primary">
           Edit
        </Button>
        {isOpen && (
            <Modal onRequestClose={ closeModal } title="Edit Page">
                <EditPageForm
                    pageId={pageId}
                    onCancel={closeModal}
                    onSaveFinished={closeModal}
                    />
            </Modal>
        ) }
        </>
    )
}

export function PageForm({ title, onChangeTitle, hasEdits, lastError, isSaving, onCancel, onSave }){

    return (
        <div className="my-gutenberg-form">
            <TextControl
                value={ title }
                label='Page title:'
                onChange={ onChangeTitle }
            />
             { lastError ? (
                <div className="form-error">
                    Error: { lastError.message }
                </div>
            ) : ( false ) }
            <div className="form-buttons">
                <Button 
                    onClick={ onSave } 
                    variant="primary" 
                    disabled={ ! hasEdits || isSaving }
                    >
                { isSaving ? (
                    <>
                        <Spinner/>
                        Saving
                    </>
                ) : 'Save' }
                </Button>
                <Button 
                    onClick={ onCancel } 
                    variant="tertiary"
                    disabled={ isSaving }
                    >
                    Cancel
                </Button>
            </div>
        </div>
       
    );

}

export function CreatePageForm( { onCancel, onSaveFinished } ) {
    const [title, setTitle] = useState();
    const { saveEntityRecord } = useDispatch( coreDataStore );
    const handleChange = ( title ) => setTitle ( title );
    const handleSave = async () => {
		const savedRecord = await saveEntityRecord( 'postType', 'page', {
			title,
			status: 'publish',
		} );
		if ( savedRecord ) {
			onSaveFinished();
		}
	};
    const { lastError, isSaving } = useSelect(
		( select ) => ( {
			// Notice the missing pageId argument:
			lastError: select( coreDataStore ).getLastEntitySaveError(
				'postType',
				'page'
			),
			// Notice the missing pageId argument
			isSaving: select( coreDataStore ).isSavingEntityRecord(
				'postType',
				'page'
			),
		} ),
		[]
	);
    return (
        <PageForm
            title={ title }
            onChangeTitle={ handleChange }
            hasEdits={ !!title }
            onSave={ handleSave }
            onCancel={ onCancel }
            lastError={ lastError }
            isSaving={ isSaving }
        />
    );
}

export function EditPageForm( { pageId, onCancel, onSaveFinished } ) {
    const { isSaving, hasEdits,lastError, page } = useSelect(
        select => ({ 
            page: select( coreDataStore ).getEditedEntityRecord( 'postType', 'page', pageId ),
            lastError: select( coreDataStore ).getLastEntitySaveError( 'postType', 'page', pageId ),
            isSaving: select( coreDataStore  ).isSavingEntityRecord( 'postType', 'page', pageId ),
            hasEdits: select( coreDataStore ).hasEditsForEntityRecord( 'postType', 'page', pageId )
        }),
        [pageId]
    );
    const { editEntityRecord, saveEditedEntityRecord } = useDispatch( coreDataStore );
    // to test the error message 
    // const handleChange = ( title ) => editEntityRecord( 'postType', 'page', pageId, { title, date: -1 });
    
    const handleChange = ( title ) => editEntityRecord( 'postType', 'page', pageId, { title });
    const handleSave = async () => {
       const updatedRecord =  await saveEditedEntityRecord( 'postType', 'page', pageId );
        if ( updatedRecord ) {
            onSaveFinished();
        }
    };

    return (
    
        <PageForm
        title={ page.title }
        onChangeTitle={ handleChange }
        hasEdits={ hasEdits }
        lastError={ lastError }
        isSaving={ isSaving }
        onCancel={ onCancel }
        onSave={ handleSave }
           />
       /* <div className="my-gutenberg-form">
            <TextControl
                value={ page.title }
                label='Page title:'
                onChange={ handleChange }
            />
             { lastError ? (
                <div className="form-error">
                    Error: { lastError.message }
                </div>
            ) : false }
            <div className="form-buttons">
                <Button 
                    onClick={ handleSave } 
                    variant="primary" 
                    disabled={ ! hasEdits || isSaving }
                    >
                { isSaving ? (
                    <>
                        <Spinner/>
                        Saving
                    </>
                ) : 'Save' }
                </Button>
                <Button 
                    onClick={ onCancel } 
                    variant="tertiary"
                    disabled={ isSaving }
                    >
                    Cancel
                </Button>
            </div>
        </div>
       */
    );
}

function MyFirstApp() {
    //Step 5
   
    //const pages = [{ id: 'mock', title: 'Sample page' }]
   /* const pages = useSelect(
        select => select( coreDataStore ).getEntityRecords( 'postType', 'page' ),
        []
    );
    */
    /* now allow the searchterm narrow down the list, if search box is used. */
    const [searchTerm, setSearchTerm] = useState( '' );
    const  { pages, hasResolved } = useSelect( select => {
        const query = {};
        if ( searchTerm ){
            query.search = searchTerm;
        }
        const selectorArgs = [ 'postType', 'page', query ];
        return  {
            pages: select( coreDataStore ).getEntityRecords( ...selectorArgs ),
            hasResolved: select( coreDataStore )
                .hasFinishedResolution('getEntityRecords', selectorArgs ),
        };
    },[ searchTerm ]
    );

    return (
        < >
            <Notifications />
            <div className="list-controls">
                <SearchControl
                onChange={ setSearchTerm }
                value={ searchTerm }
                />
                <CreatePageButton/>
            </div>
             <PagesList hasResolved={ hasResolved } pages={ pages }/>
          </ >
    );
    }
  
/*function PagesList( { pages } ) {
    return (
        <ul>
            { pages?.map( page => (
                <li key={ page.id }>
                    { decodeEntities( page.title.rendered ) }
                </li>
            ) ) }
        </ul>
    );
}*/

// For step 4: Add a Search box on top of things. 

// Step 4 turning list into an HTML table
function PagesList( { hasResolved, pages } ) {

        if ( !hasResolved ) {
            return <Spinner/>;
        }
        if ( !pages?.length ) {
            return <div>No results</div>;
        }
    

    return (
        <table className="wp-list-table widefat fixed striped table-view-list">
            <thead>
                <tr>
                    <th><strong>List of pages</strong></th>
                    <th style={{width:120}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                { pages?.map( page => (
                    <tr key={ page.id }>
                        <td>{ decodeEntities( page.title.rendered ) }</td>
                        <td>
                            <div className="form-buttons">
                                 <PageEditButton pageId={ page.id } />
                                 <DeletePageButton pageId={ page.id }/>
                            </div>
                        </td>
                    </tr>
                ) ) }
            </tbody>
        </table>
    );
}


import { SnackbarList } from '@wordpress/components';
import { store as noticesStore } from '@wordpress/notices';
 
function Notifications() {
        const notices = useSelect(
            ( select ) => select( noticesStore ).getNotices(),
            []
        );
        const { removeNotice } = useDispatch( noticesStore );
        const snackbarNotices = notices.filter( ({ type }) => type === 'snackbar' );
     

    return (
        <SnackbarList
        notices={ snackbarNotices }
        className="components-editor-notices__snackbar"
        onRemove={ removeNotice }
         />
    );
}

window.addEventListener(
    'load',
    function () {
        render(
            <MyFirstApp />,
            document.querySelector( '#my-first-gutenberg-app' )
        );
    },
    false
);