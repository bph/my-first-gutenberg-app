/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/html-entities":
/*!**************************************!*\
  !*** external ["wp","htmlEntities"] ***!
  \**************************************/
/***/ ((module) => {

module.exports = window["wp"]["htmlEntities"];

/***/ }),

/***/ "@wordpress/notices":
/*!*********************************!*\
  !*** external ["wp","notices"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["notices"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreatePageForm: () => (/* binding */ CreatePageForm),
/* harmony export */   EditPageForm: () => (/* binding */ EditPageForm),
/* harmony export */   PageForm: () => (/* binding */ PageForm)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/html-entities */ "@wordpress/html-entities");
/* harmony import */ var _wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/notices */ "@wordpress/notices");
/* harmony import */ var _wordpress_notices__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__);

// import { render } from '@wordpress/element';



//needed post title may contain HTML entities like &aacute;, so 
//we need to use the decodeEntities function to replace them


//needed for Search Box above Page list. (Step 4)


/* 
function MyFirstApp() {
    return <span>Hello from JavaScript!</span>;
}
*/

const DeletePageButton = ({
  pageId,
  onCancel,
  onSaveFinished
}) => {
  // fortesting error messages.: pageId = pageId * 1000;
  const {
    getLastEntityDeleteError
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    deleteEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
  const {
    createSuccessNotice,
    createErrorNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);
  // const handleDelete = () => deleteEntityRecord( 'postType', 'page', pageId );
  const handleDelete = async () => {
    const success = await deleteEntityRecord('postType', 'page', pageId);
    if (success) {
      // Tell the user the operation succeeded:
      createSuccessNotice("The page was deleted!", {
        type: 'snackbar'
      });
    } else {
      const lastError = getLastEntityDeleteError('postType', 'page', pageId);
      const message = (lastError?.message || 'There was an error.') + ' Please refresh the page and try again.';
      // Tell the user how exactly the operation has failed:
      createErrorNotice(message, {
        type: 'snackbar'
      });
    }
  };
  const {
    isDeleting
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => ({
    isDeleting: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).isDeletingEntityRecord('pageType', 'page', pageId)
  }), [pageId]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    variant: "primary",
    onClick: handleDelete,
    disabled: isDeleting
  }, isDeleting ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null), "Deleting...") : 'Delete');
};
function CreatePageButton() {
  const [isOpen, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: openModal,
    variant: "primary"
  }, "Create a new Page"), isOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    onRequestClose: closeModal,
    title: "Create a new page"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CreatePageForm, {
    onCancel: closeModal,
    onSaveFinished: closeModal
  })));
}
function PageEditButton({
  pageId
}) {
  //right from the code examples in the Component Storybook
  const [isOpen, setOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: openModal,
    variant: "primary"
  }, "Edit"), isOpen && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Modal, {
    onRequestClose: closeModal,
    title: "Edit Page"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(EditPageForm, {
    pageId: pageId,
    onCancel: closeModal,
    onSaveFinished: closeModal
  })));
}
function PageForm({
  title,
  onChangeTitle,
  hasEdits,
  lastError,
  isSaving,
  onCancel,
  onSave
}) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "my-gutenberg-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
    value: title,
    label: "Page title:",
    onChange: onChangeTitle
  }), lastError ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-error"
  }, "Error: ", lastError.message) : false, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-buttons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: onSave,
    variant: "primary",
    disabled: !hasEdits || isSaving
  }, isSaving ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null), "Saving") : 'Save'), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Button, {
    onClick: onCancel,
    variant: "tertiary",
    disabled: isSaving
  }, "Cancel")));
}
function CreatePageForm({
  onCancel,
  onSaveFinished
}) {
  const [title, setTitle] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const {
    saveEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
  const handleChange = title => setTitle(title);
  const handleSave = async () => {
    const savedRecord = await saveEntityRecord('postType', 'page', {
      title,
      status: 'publish'
    });
    if (savedRecord) {
      onSaveFinished();
    }
  };
  const {
    lastError,
    isSaving
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => ({
    // Notice the missing pageId argument:
    lastError: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getLastEntitySaveError('postType', 'page'),
    // Notice the missing pageId argument
    isSaving: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).isSavingEntityRecord('postType', 'page')
  }), []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PageForm, {
    title: title,
    onChangeTitle: handleChange,
    hasEdits: !!title,
    onSave: handleSave,
    onCancel: onCancel,
    lastError: lastError,
    isSaving: isSaving
  });
}
function EditPageForm({
  pageId,
  onCancel,
  onSaveFinished
}) {
  const {
    isSaving,
    hasEdits,
    lastError,
    page
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => ({
    page: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEditedEntityRecord('postType', 'page', pageId),
    lastError: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getLastEntitySaveError('postType', 'page', pageId),
    isSaving: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).isSavingEntityRecord('postType', 'page', pageId),
    hasEdits: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).hasEditsForEntityRecord('postType', 'page', pageId)
  }), [pageId]);
  const {
    editEntityRecord,
    saveEditedEntityRecord
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store);
  // to test the error message 
  // const handleChange = ( title ) => editEntityRecord( 'postType', 'page', pageId, { title, date: -1 });

  const handleChange = title => editEntityRecord('postType', 'page', pageId, {
    title
  });
  const handleSave = async () => {
    const updatedRecord = await saveEditedEntityRecord('postType', 'page', pageId);
    if (updatedRecord) {
      onSaveFinished();
    }
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PageForm, {
    title: page.title,
    onChangeTitle: handleChange,
    hasEdits: hasEdits,
    lastError: lastError,
    isSaving: isSaving,
    onCancel: onCancel,
    onSave: handleSave
  })
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
  */;
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
  const [searchTerm, setSearchTerm] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    pages,
    hasResolved
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => {
    const query = {};
    if (searchTerm) {
      query.search = searchTerm;
    }
    const selectorArgs = ['postType', 'page', query];
    return {
      pages: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).getEntityRecords(...selectorArgs),
      hasResolved: select(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_2__.store).hasFinishedResolution('getEntityRecords', selectorArgs)
    };
  }, [searchTerm]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Notifications, null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "list-controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SearchControl, {
    onChange: setSearchTerm,
    value: searchTerm
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(CreatePageButton, null)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PagesList, {
    hasResolved: hasResolved,
    pages: pages
  }));
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
function PagesList({
  hasResolved,
  pages
}) {
  if (!hasResolved) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.Spinner, null);
  }
  if (!pages?.length) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "No results");
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("table", {
    className: "wp-list-table widefat fixed striped table-view-list"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("thead", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("strong", null, "List of pages")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("th", {
    style: {
      width: 120
    }
  }, "Actions"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tbody", null, pages?.map(page => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("tr", {
    key: page.id
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_html_entities__WEBPACK_IMPORTED_MODULE_3__.decodeEntities)(page.title.rendered)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("td", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-buttons"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(PageEditButton, {
    pageId: page.id
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DeletePageButton, {
    pageId: page.id
  })))))));
}


function Notifications() {
  const notices = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useSelect)(select => select(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store).getNotices(), []);
  const {
    removeNotice
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_1__.useDispatch)(_wordpress_notices__WEBPACK_IMPORTED_MODULE_5__.store);
  const snackbarNotices = notices.filter(({
    type
  }) => type === 'snackbar');
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SnackbarList, {
    notices: snackbarNotices,
    className: "components-editor-notices__snackbar",
    onRemove: removeNotice
  });
}
window.addEventListener('load', function () {
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.render)((0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(MyFirstApp, null), document.querySelector('#my-first-gutenberg-app'));
}, false);
})();

/******/ })()
;
//# sourceMappingURL=index.js.map