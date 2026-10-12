module.exports = {

"[project]/lib/giftStore.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "getStoredGift": ()=>getStoredGift,
    "saveGift": ()=>saveGift
});
var __TURBOPACK__commonjs__external__node$3a$fs$2f$promises__ = __turbopack_external_require__("node:fs/promises", true);
var __TURBOPACK__commonjs__external__node$3a$path__ = __turbopack_external_require__("node:path", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const STORE_DIR = __TURBOPACK__commonjs__external__node$3a$path__["default"].join(process.cwd(), 'data', 'gifts');
async function ensureStore() {
    await __TURBOPACK__commonjs__external__node$3a$fs$2f$promises__["default"].mkdir(STORE_DIR, {
        recursive: true
    });
}
function fileFor(id) {
    return __TURBOPACK__commonjs__external__node$3a$path__["default"].join(STORE_DIR, `${id}.json`);
}
async function saveGift(gift) {
    await ensureStore();
    await __TURBOPACK__commonjs__external__node$3a$fs$2f$promises__["default"].writeFile(fileFor(gift.id), JSON.stringify(gift), 'utf8');
    return gift;
}
async function getStoredGift(id) {
    try {
        const raw = await __TURBOPACK__commonjs__external__node$3a$fs$2f$promises__["default"].readFile(fileFor(id), 'utf8');
        return JSON.parse(raw);
    } catch  {
        return null;
    }
}

})()),
"[project]/app/api/gifts/route.ts [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "POST": ()=>POST,
    "runtime": ()=>runtime
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$giftStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/lib/giftStore.ts [app-route] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const runtime = 'nodejs';
async function POST(request) {
    try {
        const gift = await request.json();
        if (!gift?.id || !gift?.content?.recipient || !gift?.presentation) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid gift payload.'
            }, {
                status: 400
            });
        }
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$giftStore$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveGift"])(gift);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            giftId: gift.id,
            recipientUrl: `/g/${gift.id}`
        });
    } catch (error) {
        console.error('Gift save failed', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Could not save the gift.'
        }, {
            status: 500
        });
    }
}

})()),

};

//# sourceMappingURL=_e500ba._.js.map