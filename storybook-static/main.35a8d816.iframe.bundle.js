(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{109:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"Pinned",(function(){return Pinned})),__webpack_require__.d(__webpack_exports__,"Archived",(function(){return Archived}));var E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Task__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(168));__webpack_exports__.default={component:_Task__WEBPACK_IMPORTED_MODULE_3__.a,title:"Components/Task"};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Task__WEBPACK_IMPORTED_MODULE_3__.a,Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},Default=Template.bind({});Default.args={task:{id:"1",title:"Test Task",state:"TASK_INBOX",updatedAt:new Date(2021,0,1,9,0)}};var Pinned=Template.bind({});Pinned.args={task:Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_PINNED"})};var Archived=Template.bind({});Archived.args={task:Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},Default.args.task),{},{state:"TASK_ARCHIVED"})},Default.parameters=Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},Default.parameters),Pinned.parameters=Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},Pinned.parameters),Archived.parameters=Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"args => <Task {...args} />"}},Archived.parameters)},122:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Button}));var E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(220),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(3),Button=(__webpack_require__(0),__webpack_require__(935),function Button(_ref){var primary=_ref.primary,backgroundColor=_ref.backgroundColor,size=_ref.size,label=_ref.label,props=Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__.a)(_ref,["primary","backgroundColor","size","label"]),mode=primary?"storybook-button--primary":"storybook-button--secondary";return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)(Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({type:"button",className:["storybook-button","storybook-button--".concat(size),mode].join(" "),style:backgroundColor&&{backgroundColor:backgroundColor}},props),{},{children:label}))});Button.defaultProps={backgroundColor:null,primary:!1,size:"medium",onClick:void 0},Button.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{backgroundColor:{defaultValue:{value:"null",computed:!1},type:{name:"string"},required:!1,description:"What background color to use"},primary:{defaultValue:{value:"false",computed:!1},type:{name:"bool"},required:!1,description:"Is this the principal call to action on the page?"},size:{defaultValue:{value:"'medium'",computed:!1},type:{name:"enum",value:[{value:"'small'",computed:!1},{value:"'medium'",computed:!1},{value:"'large'",computed:!1}]},required:!1,description:"How large should the button be?"},onClick:{defaultValue:{value:"undefined",computed:!0},type:{name:"func"},required:!1,description:"Optional click handler"},label:{type:{name:"string"},required:!0,description:"Button contents"}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Btn\\Button.jsx"]={name:"Button",docgenInfo:Button.__docgenInfo,path:"src\\components\\Btn\\Button.jsx"})},167:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Header}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),_Btn_Button__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(122)),Header=(__webpack_require__(936),function Header(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("header",{children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"wrapper",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("g",{fill:"none",fillRule:"evenodd",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z",fill:"#FFF"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z",fill:"#555AB9"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z",fill:"#91BAF8"})]})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h1",{children:"Acme"})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:user?Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Btn_Button__WEBPACK_IMPORTED_MODULE_2__.a,{size:"small",onClick:onLogout,label:"Log out"}):Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Btn_Button__WEBPACK_IMPORTED_MODULE_2__.a,{size:"small",onClick:onLogin,label:"Log in"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_Btn_Button__WEBPACK_IMPORTED_MODULE_2__.a,{primary:!0,size:"small",onClick:onCreateAccount,label:"Sign up"})]})})]})})});Header.defaultProps={user:null},Header.__docgenInfo={description:"",methods:[],displayName:"Header",props:{user:{defaultValue:{value:"null",computed:!1},type:{name:"shape",value:{}},required:!1,description:""},onLogin:{type:{name:"func"},required:!0,description:""},onLogout:{type:{name:"func"},required:!0,description:""},onCreateAccount:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Header\\Header.jsx"]={name:"Header",docgenInfo:Header.__docgenInfo,path:"src\\components\\Header\\Header.jsx"})},168:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Task}));var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),Task=(__webpack_require__(0),function Task(_ref){var _ref$task=_ref.task,id=_ref$task.id,title=_ref$task.title,state=_ref$task.state,onArchiveTask=_ref.onArchiveTask,onPinTask=_ref.onPinTask;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:"list-item ".concat(state),children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label",{className:"checkbox",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"checkbox",defaultChecked:"TASK_ARCHIVED"===state,disabled:!0,name:"checked"}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"checkbox-custom",onClick:function onClick(){return onArchiveTask(id)}})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"title",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",value:title,readOnly:!0,placeholder:"Input title"})}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:"actions",onClick:function onClick(event){return event.stopPropagation()},children:"TASK_ARCHIVED"!==state&&Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a",{onClick:function onClick(){return onPinTask(id)},children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"icon-star"})})})]})});Task.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",required:!0},title:{name:"string",required:!0},state:{name:"string",required:!0}}},required:!1,description:""},onArchiveTask:{type:{name:"func"},required:!1,description:""},onPinTask:{type:{name:"func"},required:!1,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Task\\Task.js"]={name:"Task",docgenInfo:Task.__docgenInfo,path:"src\\components\\Task\\Task.js"})},218:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));var E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Header__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(167));__webpack_exports__.default={title:"Example/Header",component:_Header__WEBPACK_IMPORTED_MODULE_3__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_3__.a,Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},LoggedIn=Template.bind({});LoggedIn.args={user:{}};var LoggedOut=Template.bind({});LoggedOut.args={},LoggedIn.parameters=Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Header {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Header {...args} />"}},LoggedOut.parameters)},489:function(module,exports,__webpack_require__){__webpack_require__(490),__webpack_require__(689),__webpack_require__(690),__webpack_require__(939),__webpack_require__(940),__webpack_require__(945),__webpack_require__(946),__webpack_require__(944),__webpack_require__(941),__webpack_require__(947),__webpack_require__(942),__webpack_require__(943),__webpack_require__(948),module.exports=__webpack_require__(931)},585:function(module,exports){},690:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(352)},719:function(module,exports){},930:function(module,exports,__webpack_require__){},931:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(352).configure)([__webpack_require__(932)],module,!1)}).call(this,__webpack_require__(193)(module))},932:function(module,exports,__webpack_require__){var map={"./Btn/Button.stories.jsx":933,"./Checkbox/Checkbox.stories.js":949,"./Header/Header.stories.jsx":218,"./Input/Input.stories.js":950,"./Page/Page.stories.jsx":951,"./Task/Task.stories.js":109,"./TaskList/TaskList.stories.js":952};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=932},933:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary})),__webpack_require__.d(__webpack_exports__,"Secondary",(function(){return Secondary})),__webpack_require__.d(__webpack_exports__,"Large",(function(){return Large})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small}));var E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(12),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(3),_Button__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(0),__webpack_require__(122));__webpack_exports__.default={title:"Example/Button",component:_Button__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{backgroundColor:{control:"color"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__.a,Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},Primary=Template.bind({});Primary.args={primary:!0,label:"Button"};var Secondary=Template.bind({});Secondary.args={label:"Button"};var Large=Template.bind({});Large.args={size:"large",label:"Button"};var Small=Template.bind({});Small.args={size:"small",label:"Button"},Primary.parameters=Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Button {...args} />"}},Primary.parameters),Secondary.parameters=Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Button {...args} />"}},Secondary.parameters),Large.parameters=Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Button {...args} />"}},Large.parameters),Small.parameters=Object(E_WORK_111176_storybook_react_test_storybook_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Button {...args} />"}},Small.parameters)},935:function(module,exports,__webpack_require__){},936:function(module,exports,__webpack_require__){},937:function(module,exports,__webpack_require__){},938:function(module,exports,__webpack_require__){},948:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));var client_api=__webpack_require__(959),esm=__webpack_require__(5),parameters=(__webpack_require__(930),{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}});function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(client_api.c)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(client_api.d)(loader,!1)}));case"parameters":return Object(client_api.e)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(client_api.a)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(client_api.b)(enhancer)}));case"render":return Object(client_api.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(client_api.e)(v,!1);default:return console.log(key+" was not supported :( !")}}))},949:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"withLabel",(function(){return withLabel}));var objectSpread2=__webpack_require__(12),slicedToArray=__webpack_require__(219),jsx_runtime=__webpack_require__(3),react=__webpack_require__(0),react_default=__webpack_require__.n(react),objectWithoutProperties=__webpack_require__(220),Checkbox_Checkbox=function Checkbox(_ref){var value=_ref.value,label=_ref.label,_onChange=_ref.onChange,checked=_ref.checked,id=_ref.id,props=(_ref.disabled,_ref.children,Object(objectWithoutProperties.a)(_ref,["value","label","onChange","checked","id","disabled","children"]));return Object(jsx_runtime.jsxs)("label",{htmlFor:id,children:[Object(jsx_runtime.jsx)("input",Object(objectSpread2.a)({type:"checkbox",onChange:function onChange(){null==_onChange||_onChange(!checked,value)},id:id,checked:checked},props)),Object(jsx_runtime.jsx)("span",{children:label})]})};Checkbox_Checkbox.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};var components_Checkbox_Checkbox=react_default.a.memo(Checkbox_Checkbox);"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Checkbox\\Checkbox.js"]={name:"Checkbox",docgenInfo:Checkbox_Checkbox.__docgenInfo,path:"src\\components\\Checkbox\\Checkbox.js"});__webpack_exports__.default={title:"Components/Checkbox"};var withLabel=function Template(args){var _React$useState=react_default.a.useState(!1),_React$useState2=Object(slicedToArray.a)(_React$useState,2),checked=_React$useState2[0],setChecked=_React$useState2[1];return Object(jsx_runtime.jsx)(components_Checkbox_Checkbox,Object(objectSpread2.a)({checked:checked,onChange:setChecked},args))}.bind({});withLabel.args={label:"Check"},withLabel.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\r\n  const [checked, setChecked] = React.useState(false)\r\n\r\n  return <Checkbox checked={checked} onChange={setChecked} {...args} />\r\n}"}},withLabel.parameters)},950:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"MyInput",(function(){return MyInput})),__webpack_require__.d(__webpack_exports__,"Small",(function(){return Small})),__webpack_require__.d(__webpack_exports__,"Med",(function(){return Med}));var objectSpread2=__webpack_require__(12),slicedToArray=__webpack_require__(219),jsx_runtime=__webpack_require__(3),react=__webpack_require__(0),Input_Input=(__webpack_require__(937),function Input(_ref){var size=_ref.size,value=_ref.value,placeholder=_ref.placeholder,label=_ref.label,handleChange=_ref.handleChange,disabled=_ref.disabled;return Object(jsx_runtime.jsxs)("label",{children:[Object(jsx_runtime.jsx)("span",{children:label}),Object(jsx_runtime.jsx)("input",{className:size?"input input_".concat(size):"input",value:value,onChange:handleChange,placeholder:placeholder,disabled:disabled})]})});Input_Input.__docgenInfo={description:"",methods:[],displayName:"Input"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Input\\Input.js"]={name:"Input",docgenInfo:Input_Input.__docgenInfo,path:"src\\components\\Input\\Input.js"});__webpack_exports__.default={title:"Components/Input"};var Input_stories_Template=function Template(args){var _useState=Object(react.useState)(""),_useState2=Object(slicedToArray.a)(_useState,2),newValue=_useState2[0],setNewValue=_useState2[1];return Object(jsx_runtime.jsx)(Input_Input,Object(objectSpread2.a)({value:newValue,handleChange:function handleChange(e){return setNewValue(e.target.value)}},args))},MyInput=Input_stories_Template.bind({});MyInput.args={placeholder:"Введите текст",label:"My Input",disabled:!1};var Small=Input_stories_Template.bind({});Small.args={placeholder:"Введите текст",label:"My Input",disabled:!1,size:"small"};var Med=Input_stories_Template.bind({});Med.args={placeholder:"Введите текст",label:"My Input",disabled:!1,size:"med"},MyInput.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\r\n  const [newValue, setNewValue] = useState('')\r\n  return <Input value={newValue} handleChange={(e) => setNewValue(e.target.value)} {...args} />\r\n}"}},MyInput.parameters),Small.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\r\n  const [newValue, setNewValue] = useState('')\r\n  return <Input value={newValue} handleChange={(e) => setNewValue(e.target.value)} {...args} />\r\n}"}},Small.parameters),Med.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => {\r\n  const [newValue, setNewValue] = useState('')\r\n  return <Input value={newValue} handleChange={(e) => setNewValue(e.target.value)} {...args} />\r\n}"}},Med.parameters)},951:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoggedIn",(function(){return LoggedIn})),__webpack_require__.d(__webpack_exports__,"LoggedOut",(function(){return LoggedOut}));var objectSpread2=__webpack_require__(12),jsx_runtime=__webpack_require__(3),Header=(__webpack_require__(0),__webpack_require__(167)),Page_Page=(__webpack_require__(938),function Page(_ref){var user=_ref.user,onLogin=_ref.onLogin,onLogout=_ref.onLogout,onCreateAccount=_ref.onCreateAccount;return Object(jsx_runtime.jsxs)("article",{children:[Object(jsx_runtime.jsx)(Header.a,{user:user,onLogin:onLogin,onLogout:onLogout,onCreateAccount:onCreateAccount}),Object(jsx_runtime.jsxs)("section",{children:[Object(jsx_runtime.jsx)("h2",{children:"Pages in Storybook"}),Object(jsx_runtime.jsxs)("p",{children:["We recommend building UIs with a"," ",Object(jsx_runtime.jsx)("a",{href:"https://componentdriven.org",target:"_blank",rel:"noopener noreferrer",children:Object(jsx_runtime.jsx)("strong",{children:"component-driven"})})," ","process starting with atomic components and ending with pages."]}),Object(jsx_runtime.jsx)("p",{children:"Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:"}),Object(jsx_runtime.jsxs)("ul",{children:[Object(jsx_runtime.jsx)("li",{children:'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories'}),Object(jsx_runtime.jsx)("li",{children:"Assemble data in the page component from your services. You can mock these services out using Storybook."})]}),Object(jsx_runtime.jsxs)("p",{children:["Get a guided tutorial on component-driven development at"," ",Object(jsx_runtime.jsx)("a",{href:"https://storybook.js.org/tutorials/",target:"_blank",rel:"noopener noreferrer",children:"Storybook tutorials"}),". Read more in the"," ",Object(jsx_runtime.jsx)("a",{href:"https://storybook.js.org/docs",target:"_blank",rel:"noopener noreferrer",children:"docs"}),"."]}),Object(jsx_runtime.jsxs)("div",{className:"tip-wrapper",children:[Object(jsx_runtime.jsx)("span",{className:"tip",children:"Tip"})," Adjust the width of the canvas with the"," ",Object(jsx_runtime.jsx)("svg",{width:"10",height:"10",viewBox:"0 0 12 12",xmlns:"http://www.w3.org/2000/svg",children:Object(jsx_runtime.jsx)("g",{fill:"none",fillRule:"evenodd",children:Object(jsx_runtime.jsx)("path",{d:"M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z",id:"a",fill:"#999"})})}),"Viewports addon in the toolbar"]})]})]})});Page_Page.defaultProps={user:null},Page_Page.__docgenInfo={description:"",methods:[],displayName:"Page",props:{user:{defaultValue:{value:"null",computed:!1},type:{name:"shape",value:{}},required:!1,description:""},onLogin:{type:{name:"func"},required:!0,description:""},onLogout:{type:{name:"func"},required:!0,description:""},onCreateAccount:{type:{name:"func"},required:!0,description:""}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Page\\Page.jsx"]={name:"Page",docgenInfo:Page_Page.__docgenInfo,path:"src\\components\\Page\\Page.jsx"});var Header_stories=__webpack_require__(218),Page_stories_Template=(__webpack_exports__.default={title:"Example/Page",component:Page_Page},function Template(args){return Object(jsx_runtime.jsx)(Page_Page,Object(objectSpread2.a)({},args))}),LoggedIn=Page_stories_Template.bind({});LoggedIn.args=Object(objectSpread2.a)({},Header_stories.LoggedIn.args);var LoggedOut=Page_stories_Template.bind({});LoggedOut.args=Object(objectSpread2.a)({},Header_stories.LoggedOut.args),LoggedIn.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Page {...args} />"}},LoggedIn.parameters),LoggedOut.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Page {...args} />"}},LoggedOut.parameters)},952:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"WithPinnedTasks",(function(){return WithPinnedTasks})),__webpack_require__.d(__webpack_exports__,"Loading",(function(){return Loading})),__webpack_require__.d(__webpack_exports__,"Empty",(function(){return Empty}));var toConsumableArray=__webpack_require__(169),objectSpread2=__webpack_require__(12),jsx_runtime=__webpack_require__(3),Task=(__webpack_require__(0),__webpack_require__(168)),TaskList_TaskList=function TaskList(_ref){var loading=_ref.loading,tasks=_ref.tasks,events={onPinTask:_ref.onPinTask,onArchiveTask:_ref.onArchiveTask},LoadingRow=Object(jsx_runtime.jsxs)("div",{className:"loading-item",children:[Object(jsx_runtime.jsx)("span",{className:"glow-checkbox"}),Object(jsx_runtime.jsxs)("span",{className:"glow-text",children:[Object(jsx_runtime.jsx)("span",{children:"Loading"})," ",Object(jsx_runtime.jsx)("span",{children:"cool"})," ",Object(jsx_runtime.jsx)("span",{children:"state"})]})]});if(loading)return Object(jsx_runtime.jsxs)("div",{className:"list-items",children:[LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow,LoadingRow]});if(0===tasks.length)return Object(jsx_runtime.jsx)("div",{className:"list-items",children:Object(jsx_runtime.jsxs)("div",{className:"wrapper-message",children:[Object(jsx_runtime.jsx)("span",{className:"icon-check"}),Object(jsx_runtime.jsx)("div",{className:"title-message",children:"You have no tasks"}),Object(jsx_runtime.jsx)("div",{className:"subtitle-message",children:"Sit back and relax"})]})});var tasksInOrder=[].concat(Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"===t.state}))),Object(toConsumableArray.a)(tasks.filter((function(t){return"TASK_PINNED"!==t.state}))));return Object(jsx_runtime.jsx)("div",{className:"list-items",children:tasksInOrder.map((function(task){return Object(jsx_runtime.jsx)(Task.a,Object(objectSpread2.a)({task:task},events),task.id)}))})};TaskList_TaskList.__docgenInfo={description:"",methods:[],displayName:"TaskList"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\TaskList\\TaskList.js"]={name:"TaskList",docgenInfo:TaskList_TaskList.__docgenInfo,path:"src\\components\\TaskList\\TaskList.js"});var Task_stories=__webpack_require__(109),TaskList_stories_Template=(__webpack_exports__.default={component:TaskList_TaskList,title:"Components/TaskList",decorators:[function(story){return Object(jsx_runtime.jsx)("div",{style:{padding:"35px"},children:story()})}]},function Template(args){return Object(jsx_runtime.jsx)(TaskList_TaskList,Object(objectSpread2.a)({},args))}),Default=TaskList_stories_Template.bind({});Default.args={tasks:[Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"1",title:"Task 1"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"2",title:"Task 2"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"3",title:"Task 3"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"4",title:"Task 4"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"5",title:"Task 5"}),Object(objectSpread2.a)(Object(objectSpread2.a)({},Task_stories.Default.args.task),{},{id:"6",title:"Task 6"})]};var WithPinnedTasks=TaskList_stories_Template.bind({});WithPinnedTasks.args={tasks:[].concat(Object(toConsumableArray.a)(Default.args.tasks.slice(0,5)),[{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}])};var Loading=TaskList_stories_Template.bind({});Loading.args={tasks:[],loading:!0};var Empty=TaskList_stories_Template.bind({});Empty.args=Object(objectSpread2.a)(Object(objectSpread2.a)({},Loading.args),{},{loading:!1}),Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <TaskList {...args} />"}},Default.parameters),WithPinnedTasks.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <TaskList {...args} />"}},WithPinnedTasks.parameters),Loading.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <TaskList {...args} />"}},Loading.parameters),Empty.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <TaskList {...args} />"}},Empty.parameters)}},[[489,2,3]]]);