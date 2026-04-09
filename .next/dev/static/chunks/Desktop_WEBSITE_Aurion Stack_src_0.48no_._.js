(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/WEBSITE/Aurion Stack/src/components/SchemaOrg.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * SchemaOrg
 * ─────────
 * Injects one or more Schema.org JSON-LD <script> blocks into the DOM.
 * Place at the top of any page component to give crawlers (Google, Bing,
 * Gemini, ChatGPT) machine-readable entity signals about your business.
 *
 * Usage:
 *   <SchemaOrg schemas={[orgSchema, serviceSchema]} />
 */ __turbopack_context__.s([
    "buildFaqSchema",
    ()=>buildFaqSchema,
    "buildServiceSchema",
    ()=>buildServiceSchema,
    "default",
    ()=>__TURBOPACK__default__export__,
    "organizationSchema",
    ()=>organizationSchema,
    "websiteSchema",
    ()=>websiteSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SchemaOrg = ({ schemas })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: schemas.map((schema, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(schema, null, 2)
                }
            }, i, false, {
                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/components/SchemaOrg.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)))
    }, void 0, false);
_c = SchemaOrg;
const __TURBOPACK__default__export__ = SchemaOrg;
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://aurionstack.dev/#organization",
    name: "Aurion Stack",
    url: "https://aurionstack.dev",
    logo: {
        "@type": "ImageObject",
        url: "https://aurionstack.dev/aurionstack-logo.webp",
        width: 512,
        height: 512
    },
    image: "https://aurionstack.dev/aurionstack-logo.webp",
    description: "Build AI support agents, lead-generation systems, and automation workflows that reduce costs and scale operations for global businesses.",
    foundingDate: "2024",
    contactPoint: [
        {
            "@type": "ContactPoint",
            contactType: "customer support",
            email: "aurionstack@gmail.com",
            availableLanguage: [
                "English"
            ]
        }
    ],
    sameAs: [
        "https://instagram.com/aurionstack",
        "https://github.com/ProSamhacker"
    ],
    // Explicit multi-region service intent — tells Google this is a global entity
    areaServed: [
        "US",
        "GB",
        "AU",
        "CA",
        "SG",
        "AE",
        "IN"
    ],
    knowsAbout: [
        "AI Customer Support Automation",
        "Lead Generation Automation",
        "Conversion Optimization",
        "React",
        "Next.js",
        "TypeScript",
        "React Native",
        "Node.js",
        "AI Automation",
        "LangChain",
        "OpenAI",
        "Groq",
        "Full-Stack Development",
        "SEO Optimisation",
        "Product Engineering"
    ]
};
const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://aurionstack.dev/#website",
    url: "https://aurionstack.dev",
    name: "Aurion Stack",
    description: "Custom AI Agents & Automation for Growing Businesses. We build systems that reduce costs and capture leads.",
    publisher: {
        "@id": "https://aurionstack.dev/#organization"
    },
    inLanguage: "en-US"
};
const buildServiceSchema = (name, description, url, keywords)=>({
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url,
        keywords: keywords.join(", "),
        provider: {
            "@id": "https://aurionstack.dev/#organization"
        },
        // Worldwide service delivery
        areaServed: {
            "@type": "AdministrativeArea",
            name: "Worldwide"
        },
        serviceType: name
    });
const buildFaqSchema = (faqs)=>({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ q, a })=>({
                "@type": "Question",
                name: q,
                acceptedAnswer: {
                    "@type": "Answer",
                    text: a
                }
            }))
    });
var _c;
__turbopack_context__.k.register(_c, "SchemaOrg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/node_modules/lucide-react/dist/esm/icons/smartphone.js [app-client] (ecmascript) <export default as Smartphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-client] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$src$2f$components$2f$SchemaOrg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/WEBSITE/Aurion Stack/src/components/SchemaOrg.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
// ─── Topic Cluster Data ──────────────────────────────────────────────────────
const pillarSummary = `
Full-Stack AI Development is the convergence of modern frontend frameworks, scalable backend infrastructure,
and large language model (LLM) integration into a single, cohesive product. As of 2026, AI is no longer
an add-on — it's the core differentiator for any digital product competing in a global market.

At Aurion Stack, full-stack AI development means building end-to-end systems where React or Next.js
frontends talk to Node.js or Python backends that, in turn, orchestrate calls to OpenAI, Groq, or
Anthropic APIs — all deployed on Vercel or GCP with automated CI/CD pipelines.

The key pillars are: (1) a fast, SEO-optimised frontend that delivers great Core Web Vitals;
(2) a secure, type-safe API layer that handles auth, rate limiting, and data persistence;
(3) LLM integration with proper prompt engineering, streaming responses, and context management;
and (4) observability — logging, error tracking, and performance monitoring in production.

For fast-growing teams, the cost advantage of partnering with a specialised remote product studio like
Aurion Stack — versus hiring a full in-house team — is significant. A typical full-stack AI project
that would cost $80,000+ at a large agency can be delivered at a fraction of that cost without
compromising on code quality, test coverage, or deployment reliability.
`.trim();
const clusterArticles = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        category: "AI & LLMs",
        title: "How to Integrate Groq LLaMA 3 into a React App",
        description: "A step-by-step guide to streaming LLaMA 3.1 responses from the Groq API into a React frontend using server-sent events, react-markdown, and proper rate-limit handling.",
        keywords: [
            "Groq API",
            "LLaMA 3",
            "React streaming",
            "AI chatbot"
        ],
        readTime: "12 min read"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        category: "Deployment",
        title: "Vercel Deployment Architecture for Scaing SaaS",
        description: "Edge functions, ISR, image optimisation, and environment variable management on Vercel — optimised for low-latency delivery to global users and enterprise clients.",
        keywords: [
            "Vercel",
            "Next.js",
            "Deployment",
            "Edge Functions"
        ],
        readTime: "9 min read"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"],
        category: "Performance",
        title: "Achieving Sub-2s LCP on a React SPA Without SSR",
        description: "A deep-dive into lazy loading, code splitting, WebP images, fetchPriority, and resource hints that push a client-side React app into green Core Web Vitals — without migrating to Next.js.",
        keywords: [
            "Core Web Vitals",
            "LCP",
            "React SPA",
            "Performance",
            "SEO"
        ],
        readTime: "10 min read"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        category: "AI & LLMs",
        title: "Fine-Tuning Gemma 2 on Google Cloud for Domain-Specific Context",
        description: "Using Vertex AI and GCP's TPU infrastructure to fine-tune Google's Gemma 2 model on custom business data — a practical walkthrough for engineering teams.",
        keywords: [
            "Gemma 2",
            "Fine-tuning",
            "GCP",
            "Vertex AI",
            "LLM"
        ],
        readTime: "15 min read"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$smartphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Smartphone$3e$__["Smartphone"],
        category: "Mobile",
        title: "Building an Offline-First React Native App with Expo and SQLite",
        description: "Architecture patterns for apps that work without internet — using expo-sqlite for local storage, conflict resolution strategies for bi-directional sync, and optimistic UI updates.",
        keywords: [
            "React Native",
            "Expo",
            "Offline-first",
            "SQLite",
            "Mobile Dev"
        ],
        readTime: "11 min read"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
        category: "SEO & GEO",
        title: "GEO vs SEO: How to Optimise Your Platform for AI Overviews in 2026",
        description: "Traditional SEO gets you into Google's blue links. GEO gets you cited inside Gemini AI Overviews and ChatGPT answers. This post covers Schema.org markup, semantic clarity, and entity building.",
        keywords: [
            "GEO",
            "SEO",
            "AI Overview",
            "Schema Markup",
            "Gemini",
            "ChatGPT"
        ],
        readTime: "8 min read"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"],
        category: "Web Development",
        title: "Evaluating Next.js App Router for Enterprise Applications",
        description: "A frank comparison of Next.js Pages vs App router for large-scale enterprise websites — covering hosting costs, caching layers, and long-term maintainability.",
        keywords: [
            "Next.js",
            "Architecture",
            "Enterprise",
            "Web Development"
        ],
        readTime: "7 min read"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
        category: "AI & LLMs",
        title: "Building a RAG Pipeline with LangChain, Pinecone, and OpenAI",
        description: "Retrieval-Augmented Generation step-by-step: ingest business documents into a Pinecone vector store, retrieve semantically similar chunks at query time, and return grounded answers via GPT-4.",
        keywords: [
            "RAG",
            "LangChain",
            "Pinecone",
            "OpenAI",
            "Vector Database",
            "AI"
        ],
        readTime: "13 min read"
    }
];
// Article schema for the pillar page
const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Full-Stack AI Development — The Complete Guide for 2026",
    description: "A topic cluster pillar page covering full-stack AI development: LLM integration, React/Next.js deployment, mobile apps, SEO, and GEO strategies for global startups and engineering teams.",
    url: "https://aurionstack.dev/insights",
    datePublished: "2026-03-22",
    dateModified: "2026-03-25",
    author: {
        "@id": "https://aurionstack.dev/#organization"
    },
    publisher: {
        "@id": "https://aurionstack.dev/#organization"
    },
    inLanguage: "en-US",
    keywords: "Full-Stack Development, AI Development, React, Next.js, LLM, Groq, Vercel, GEO, SEO, Product Engineering"
};
// ─── Page Component ───────────────────────────────────────────────────────────
const InsightsPage = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-background text-foreground",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$src$2f$components$2f$SchemaOrg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                schemas: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$src$2f$components$2f$SchemaOrg$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["organizationSchema"],
                    articleSchema
                ]
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto flex items-center gap-4 px-4 py-4 sm:px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.back(),
                            className: "flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                    size: 16
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Back"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                            lineNumber: 132,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-bold tracking-tight text-foreground",
                            children: "Aurion Stack · Insights"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                    lineNumber: 131,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4 py-16 sm:px-6 sm:py-24 max-w-5xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "mb-16 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        size: 14
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                        lineNumber: 156,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Topic Cluster · Pillar Page"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                lineNumber: 155,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl mb-6",
                                children: [
                                    "Full-Stack ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-muted-foreground",
                                        children: "AI Development"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                        lineNumber: 160,
                                        columnNumber: 24
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                lineNumber: 159,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg",
                                children: "The complete guide to building modern AI-powered products in 2026 — from LLM integration and React architecture to SEO, deployment, and Generative Engine Optimization."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.6,
                            delay: 0.15
                        },
                        className: "mb-20 rounded-xl border border-border bg-card p-8 sm:p-12 shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold tracking-tight text-foreground mb-6 sm:text-3xl",
                                children: "Modern Product Engineering Architecture"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4 mb-10 text-muted-foreground text-sm sm:text-base leading-relaxed",
                                children: pillarSummary.split("\n\n").map((para, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: para
                                    }, i, false, {
                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                        lineNumber: 180,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
                                children: [
                                    {
                                        label: "Frontend",
                                        detail: "React, Next.js, TypeScript, Tailwind CSS — fast, SEO-optimised, Core Web Vitals green."
                                    },
                                    {
                                        label: "Backend & API",
                                        detail: "Node.js / Python / Go with auth, rate limiting, type-safe APIs, and database ORM."
                                    },
                                    {
                                        label: "LLM Integration",
                                        detail: "OpenAI, Groq, Anthropic, LangChain — streaming, RAG pipelines, prompt engineering."
                                    },
                                    {
                                        label: "Observability",
                                        detail: "Sentry, PostHog, Datadog — error tracking, user analytics, and performance monitoring in prod."
                                    }
                                ].map((pillar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-lg border border-border bg-muted/50 p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-bold text-foreground mb-2",
                                                children: pillar.label
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                lineNumber: 196,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground leading-relaxed",
                                                children: pillar.detail
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                lineNumber: 197,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, pillar.label, true, {
                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                        lineNumber: 192,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                        lineNumber: 169,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-10 flex items-end justify-between border-b border-border pb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-semibold uppercase tracking-widest text-muted-foreground block mb-2",
                                                children: "Cluster Architecture"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                lineNumber: 207,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-3xl font-bold tracking-tight text-foreground",
                                                children: [
                                                    "Engineering ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-muted-foreground",
                                                        children: "Deep Dives"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                        lineNumber: 211,
                                                        columnNumber: 29
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                lineNumber: 210,
                                                columnNumber: 15
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                        lineNumber: 206,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium text-muted-foreground hidden sm:block",
                                        children: [
                                            clusterArticles.length,
                                            " guides"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                        lineNumber: 214,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 gap-6 sm:grid-cols-2",
                                children: clusterArticles.map((article, i)=>{
                                    const Icon = article.icon;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].article, {
                                        initial: {
                                            opacity: 0,
                                            y: 20
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        viewport: {
                                            once: true,
                                            margin: "-40px"
                                        },
                                        transition: {
                                            duration: 0.4,
                                            delay: i * 0.05
                                        },
                                        className: "group flex flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mb-5 flex items-center justify-between gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "inline-flex items-center gap-2 rounded-md bg-muted px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-foreground",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                size: 12
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                                lineNumber: 234,
                                                                columnNumber: 23
                                                            }, ("TURBOPACK compile-time value", void 0)),
                                                            article.category
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-medium text-muted-foreground",
                                                        children: article.readTime
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                        lineNumber: 237,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                lineNumber: 232,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold tracking-tight text-foreground leading-snug mb-3",
                                                children: article.title
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                lineNumber: 243,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm leading-relaxed text-muted-foreground flex-1 mb-6",
                                                children: article.description
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                lineNumber: 246,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2 mb-6",
                                                children: article.keywords.map((kw)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "rounded-md border border-border bg-background px-2 py-1 text-[10px] font-medium text-muted-foreground",
                                                        children: kw
                                                    }, kw, false, {
                                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                        lineNumber: 253,
                                                        columnNumber: 23
                                                    }, ("TURBOPACK compile-time value", void 0)))
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                lineNumber: 251,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-1.5 text-xs font-bold text-primary opacity-80 group-hover:opacity-100 transition-opacity",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Coming Soon"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        size: 14,
                                                        className: "transition-transform group-hover:translate-x-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                                lineNumber: 263,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, article.title, true, {
                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                        lineNumber: 223,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0));
                                })
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                lineNumber: 219,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true
                        },
                        transition: {
                            duration: 0.6
                        },
                        className: "mt-24 rounded-xl border border-border bg-gradient-to-br from-card to-background px-6 py-12 text-center sm:px-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4",
                                children: "Ready to Build Your Platform?"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mx-auto max-w-xl text-sm text-muted-foreground sm:text-base mb-8",
                                children: "Aurion Stack handles the full stack — from ideation and architecture to deployment and ongoing maintenance. Remote-first. Shipping globally."
                            }, void 0, false, {
                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center gap-4 sm:flex-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "mailto:aurionstack@gmail.com",
                                        className: "flex w-full sm:w-auto items-center justify-center rounded-md bg-foreground px-8 py-3.5 text-sm font-semibold text-background shadow-xl hover:bg-foreground/90 transition-colors",
                                        children: "Start a Project"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/services",
                                        className: "flex w-full sm:w-auto items-center justify-center rounded-md border border-border bg-transparent px-8 py-3.5 text-sm font-semibold text-foreground hover:bg-muted transition-colors",
                                        children: "View Services"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                        lineNumber: 295,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
                lineNumber: 146,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/WEBSITE/Aurion Stack/src/app/insights/InsightsClient.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InsightsPage, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$WEBSITE$2f$Aurion__Stack$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = InsightsPage;
const __TURBOPACK__default__export__ = InsightsPage;
var _c;
__turbopack_context__.k.register(_c, "InsightsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_WEBSITE_Aurion%20Stack_src_0.48no_._.js.map