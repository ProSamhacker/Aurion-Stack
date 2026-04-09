(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/context/ReviewsContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReviewsProvider",
    ()=>ReviewsProvider,
    "useReviews",
    ()=>useReviews
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
const defaultReviews = [
    {
        text: "Aurion Stack completely transformed our backend infrastructure and delivered a flawless app. Highly recommend!",
        author: "Sarah J.",
        rating: 5
    },
    {
        text: "The AI automation they integrated saved us hundreds of hours a month. Brilliant team.",
        author: "Mark T.",
        rating: 5
    },
    {
        text: "Their attention to detail and technical expertise is unmatched. A true partner in innovation.",
        author: "David R.",
        rating: 5
    },
    {
        text: "Delivered a pixel-perfect mobile app on time and under budget. Exceptional communication throughout.",
        author: "Priya K.",
        rating: 5
    },
    {
        text: "The full-stack solution they built scales effortlessly. Our users love the experience.",
        author: "James L.",
        rating: 5
    }
];
const ReviewsContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    reviews: defaultReviews,
    addReview: ()=>{},
    avgRating: 5
});
const ReviewsProvider = ({ children })=>{
    _s();
    const [reviews, setReviews] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultReviews);
    const addReview = (r)=>setReviews((prev)=>[
                ...prev,
                r
            ]);
    const avgRating = reviews.length === 0 ? 0 : Math.round(reviews.reduce((s, r)=>s + r.rating, 0) / reviews.length * 10) / 10;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReviewsContext.Provider, {
        value: {
            reviews,
            addReview,
            avgRating
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/ReviewsContext.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ReviewsProvider, "EHFyZ6Yt8lM0TzSk82/p4mYhX8M=");
_c = ReviewsProvider;
const useReviews = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ReviewsContext);
};
_s1(useReviews, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ReviewsProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_context_ReviewsContext_tsx_0wjemoy._.js.map