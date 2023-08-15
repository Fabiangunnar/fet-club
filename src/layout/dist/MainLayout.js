"use strict";
exports.__esModule = true;
var AppSlice_1 = require("@/app-slice/AppSlice");
var Footer_1 = require("@/components/Footer");
var Modal_1 = require("@/components/Modal");
var link_1 = require("next/link");
var router_1 = require("next/router");
var react_1 = require("react");
var gi_1 = require("react-icons/gi");
var io_1 = require("react-icons/io");
var react_redux_1 = require("react-redux");
var MainLayout = function (_a) {
    var targetRef = _a.targetRef, children = _a.children;
    var navdata = react_redux_1.useSelector(function (state) { return state.app; }).navdata;
    var dispatch = react_redux_1.useDispatch();
    var _b = react_1.useState(false), isOpenNav = _b[0], setIsOpenNav = _b[1];
    var router = router_1.useRouter();
    var _c = react_1.useState(false), isElementAtTop = _c[0], setIsElementAtTop = _c[1];
    // Function to update the state based on the element's position
    var handleScroll = function () {
        if (!targetRef.current)
            return;
        var elementTop = targetRef.current.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        // You can adjust this threshold as needed
        var threshold = 40; // In pixels
        if (elementTop < windowHeight &&
            elementTop - threshold >= -targetRef.current.clientHeight) {
            setIsElementAtTop(false);
        }
        else {
            setIsElementAtTop(true);
        }
    };
    // Attach scroll event listener
    react_1.useEffect(function () {
        window.addEventListener("scroll", handleScroll);
        return function () {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("header", { className: (isElementAtTop ? "nav-bar_black" : "") + "  transition-all z-20 backdrop-blur-[4px] nav-bar fixed top-0 left-0 w-full flex  justify-center items-center" },
            react_1["default"].createElement("nav", { className: "flex p-3 h-16 justify-between relative items-center w-full gap-3 max-w-[70rem]" },
                react_1["default"].createElement("div", { className: "h-10 w-24 border border-red-900" },
                    react_1["default"].createElement("img", { className: "h-full w-full object-cover", src: "/logo.png", alt: "" })),
                react_1["default"].createElement("div", { className: "hidden md:flex gap-2 lg:gap-8 font-poppins justify-center items-center text-white" }, navdata.map(function (data) { return (react_1["default"].createElement("div", { key: data.id, onClick: function () { return dispatch(AppSlice_1.setNavData(data)); }, className: (data.state ? "text-red-500" : "") + " hover:text-red-400 transition-all" },
                    react_1["default"].createElement(link_1["default"], { href: data.link }, data.head))); })),
                react_1["default"].createElement("div", { className: "text-white  cursor-pointer px-1 md:hidden", onClick: function () { return setIsOpenNav(function (prev) { return !prev; }); } }, isOpenNav ? (react_1["default"].createElement(io_1.IoMdClose, { fontSize: 30 })) : (react_1["default"].createElement(gi_1.GiHamburgerMenu, { fontSize: 30 }))),
                react_1["default"].createElement("div", { className: "bg-[#ffffff] text-black md:hidden  font-poppins py-4 backdrop-blur-[10px] fixed top-16 " + (isOpenNav ? "left-0" : "-left-[100%]") + " transition-all w-full" }, navdata.map(function (data) { return (react_1["default"].createElement(link_1["default"], { onClick: function () { return dispatch(AppSlice_1.setNavData(data)); }, key: data.id, href: router.pathname !== "/" && data.link.includes("about")
                        ? "/" + data.link
                        : data.link },
                    react_1["default"].createElement("div", { className: "p-2 text-black px-4 cursor-pointer " + (data.state ? "text-red-900" : "") }, data.head))); })))),
        children,
        react_1["default"].createElement(Footer_1["default"], null),
        react_1["default"].createElement(Modal_1["default"], null)));
};
exports["default"] = MainLayout;
