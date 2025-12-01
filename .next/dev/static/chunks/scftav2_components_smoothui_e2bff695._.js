(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/scftav2/components/smoothui/shared/animated-group.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedGroup",
    ()=>AnimatedGroup
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scftav2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scftav2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scftav2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
"use client";
;
;
;
const defaultContainerVariants = {
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};
const defaultItemVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};
const presetVariants = {
    fade: {},
    slide: {
        hidden: {
            y: 20
        },
        visible: {
            y: 0
        }
    },
    scale: {
        hidden: {
            scale: 0.8
        },
        visible: {
            scale: 1
        }
    },
    blur: {
        hidden: {
            filter: "blur(4px)"
        },
        visible: {
            filter: "blur(0px)"
        }
    },
    "blur-slide": {
        hidden: {
            filter: "blur(4px)",
            y: 20
        },
        visible: {
            filter: "blur(0px)",
            y: 0
        }
    },
    zoom: {
        hidden: {
            scale: 0.5
        },
        visible: {
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    },
    flip: {
        hidden: {
            rotateX: -90
        },
        visible: {
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    },
    bounce: {
        hidden: {
            y: -50
        },
        visible: {
            y: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 10
            }
        }
    },
    rotate: {
        hidden: {
            rotate: -180
        },
        visible: {
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15
            }
        }
    },
    swing: {
        hidden: {
            rotate: -10
        },
        visible: {
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 8
            }
        }
    }
};
const addDefaultVariants = (variants)=>({
        hidden: {
            ...defaultItemVariants.hidden,
            ...variants.hidden
        },
        visible: {
            ...defaultItemVariants.visible,
            ...variants.visible
        }
    });
function AnimatedGroup({ children, className, variants, preset, as = "div", asChild = "div" }) {
    const selectedVariants = {
        item: addDefaultVariants(preset ? presetVariants[preset] : {}),
        container: addDefaultVariants(defaultContainerVariants)
    };
    const containerVariants = variants?.container || selectedVariants.container;
    const itemVariants = variants?.item || selectedVariants.item;
    const MotionComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(as);
    const MotionChild = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"])(asChild);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionComponent, {
        animate: "visible",
        className: className,
        initial: "hidden",
        variants: containerVariants,
        children: __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Children.map(children, (child, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MotionChild, {
                variants: itemVariants,
                children: child
            }, index, false, {
                fileName: "[project]/scftav2/components/smoothui/shared/animated-group.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/scftav2/components/smoothui/shared/animated-group.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_c = AnimatedGroup;
;
var _c;
__turbopack_context__.k.register(_c, "AnimatedGroup");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/scftav2/components/smoothui/shared/animated-text.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AnimatedText",
    ()=>AnimatedText
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scftav2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scftav2/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
function AnimatedText({ as: Tag = "span", children, className, delay = 0 }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        animate: {
            opacity: 1,
            filter: "blur(0px)",
            y: 0
        },
        initial: {
            opacity: 0,
            filter: "blur(12px)",
            y: 12
        },
        transition: {
            type: "spring",
            bounce: 0.3,
            duration: 1.5,
            delay
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/scftav2/components/smoothui/shared/animated-text.tsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/scftav2/components/smoothui/shared/animated-text.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
_c = AnimatedText;
var _c;
__turbopack_context__.k.register(_c, "AnimatedText");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/scftav2/components/smoothui/header-1/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HeroGrid",
    ()=>HeroGrid,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scftav2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__ = __turbopack_context__.i("[project]/scftav2/node_modules/lucide-react/dist/esm/icons/external-link.js [app-client] (ecmascript) <export default as ExternalLink>");
var __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scftav2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$components$2f$smoothui$2f$shared$2f$animated$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scftav2/components/smoothui/shared/animated-group.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$components$2f$smoothui$2f$shared$2f$animated$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/scftav2/components/smoothui/shared/animated-text.tsx [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module './hero-grid.module.css'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const CELL_SIZE = 120; // px
const COLORS = [
    "oklch(0.72 0.2 352.53)",
    "#A764FF",
    "#4B94FD",
    "#FD4B4E",
    "#FF8743"
];
function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}
function SubGrid() {
    _s();
    const [cellColors, setCellColors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        null,
        null,
        null,
        null
    ]);
    // Add refs for leave timeouts
    const leaveTimeouts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([
        null,
        null,
        null,
        null
    ]);
    function handleHover(cellIdx) {
        // Clear any pending timeout for this cell
        const timeout = leaveTimeouts.current[cellIdx];
        if (timeout) {
            clearTimeout(timeout);
            leaveTimeouts.current[cellIdx] = null;
        }
        setCellColors((prev)=>prev.map((c, i)=>i === cellIdx ? getRandomColor() : c));
    }
    function handleLeave(cellIdx) {
        // Add a small delay before removing the color
        leaveTimeouts.current[cellIdx] = setTimeout(()=>{
            setCellColors((prev)=>prev.map((c, i)=>i === cellIdx ? null : c));
            leaveTimeouts.current[cellIdx] = null;
        }, 120);
    }
    // Cleanup on unmount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SubGrid.useEffect": ()=>({
                "SubGrid.useEffect": ()=>{
                    leaveTimeouts.current.forEach({
                        "SubGrid.useEffect": (t)=>t && clearTimeout(t)
                    }["SubGrid.useEffect"]);
                }
            })["SubGrid.useEffect"]
    }["SubGrid.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: styles.subgrid,
        style: {
            pointerEvents: "none"
        },
        children: [
            0,
            1,
            2,
            3
        ].map((cellIdx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: styles.cell,
                onMouseEnter: ()=>handleHover(cellIdx),
                onMouseLeave: ()=>handleLeave(cellIdx),
                style: {
                    background: cellColors[cellIdx] || "transparent",
                    pointerEvents: "auto"
                },
                type: "button"
            }, cellIdx, false, {
                fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                lineNumber: 66,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
        lineNumber: 64,
        columnNumber: 5
    }, this);
}
_s(SubGrid, "D7QbE47uaMhHN4SiXe4F9ZQtxSE=");
_c = SubGrid;
function InteractiveGrid() {
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [grid, setGrid] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        columns: 0,
        rows: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "InteractiveGrid.useEffect": ()=>{
            function updateGrid() {
                if (containerRef.current) {
                    const { width, height } = containerRef.current.getBoundingClientRect();
                    setGrid({
                        columns: Math.ceil(width / CELL_SIZE),
                        rows: Math.ceil(height / CELL_SIZE)
                    });
                }
            }
            updateGrid();
            window.addEventListener("resize", updateGrid);
            return ({
                "InteractiveGrid.useEffect": ()=>window.removeEventListener("resize", updateGrid)
            })["InteractiveGrid.useEffect"];
        }
    }["InteractiveGrid.useEffect"], []);
    const total = grid.columns * grid.rows;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "aria-hidden": "true",
        className: "pointer-events-none absolute inset-0 z-0",
        ref: containerRef,
        style: {
            width: "100%",
            height: "100%"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: styles.mainGrid,
            style: {
                gridTemplateColumns: `repeat(${grid.columns}, 1fr)`,
                gridTemplateRows: `repeat(${grid.rows}, 1fr)`,
                "--grid-cell-size": `${CELL_SIZE}px`,
                width: "100%",
                height: "100%"
            },
            children: Array.from({
                length: total
            }, (_, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SubGrid, {}, `subgrid-${grid.columns}-${grid.rows}-${idx}`, false, {
                    fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
            lineNumber: 110,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
        lineNumber: 104,
        columnNumber: 5
    }, this);
}
_s1(InteractiveGrid, "lFQ5ZDFDG5Zv58Sr+72By3onmbk=");
_c1 = InteractiveGrid;
function HeroGrid() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$components$2f$smoothui$2f$shared$2f$animated$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HeroHeader"], {}, void 0, false, {
                fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "relative overflow-hidden py-36",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(InteractiveGrid, {}, void 0, false, {
                            fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$components$2f$smoothui$2f$shared$2f$animated$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                            className: "pointer-events-none flex flex-col items-center gap-6 text-center",
                            preset: "blur-slide",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$components$2f$smoothui$2f$shared$2f$animated$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedText"], {
                                            as: "h1",
                                            className: "mb-6 text-pretty font-bold text-2xl tracking-tight lg:text-5xl",
                                            children: [
                                                "Build your next project with",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-brand",
                                                    children: "Smoothui"
                                                }, void 0, false, {
                                                    fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$components$2f$smoothui$2f$shared$2f$animated$2d$text$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedText"], {
                                            as: "p",
                                            className: "mx-auto max-w-3xl text-muted-foreground lg:text-xl",
                                            delay: 0.15,
                                            children: "Smoothui gives you the building blocks to create stunning, animated interfaces in minutes."
                                        }, void 0, false, {
                                            fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$components$2f$smoothui$2f$shared$2f$animated$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatedGroup"], {
                                    className: "pointer-events-auto mt-6 flex justify-center gap-3",
                                    preset: "slide",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$components$2f$smoothui$2f$shared$2f$animated$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "shadow-sm transition-shadow hover:shadow",
                                            variant: "outline",
                                            children: "Get Started"
                                        }, void 0, false, {
                                            fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                                            lineNumber: 163,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$components$2f$smoothui$2f$shared$2f$animated$2d$group$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "group",
                                            variant: "candy",
                                            children: [
                                                "Learn more",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$scftav2$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$external$2d$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ExternalLink$3e$__["ExternalLink"], {
                                                    className: "ml-2 h-4 transition-transform group-hover:translate-x-0.5"
                                                }, void 0, false, {
                                                    fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                            lineNumber: 138,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                    lineNumber: 135,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/scftav2/components/smoothui/header-1/index.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c2 = HeroGrid;
const __TURBOPACK__default__export__ = HeroGrid;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SubGrid");
__turbopack_context__.k.register(_c1, "InteractiveGrid");
__turbopack_context__.k.register(_c2, "HeroGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=scftav2_components_smoothui_e2bff695._.js.map