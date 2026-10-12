(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/_f2b956._.js", {

"[project]/components/presentation/SafeThemePresets.ts [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "FONT_PAIRING_CLASSES": ()=>FONT_PAIRING_CLASSES,
    "PACING_DURATIONS": ()=>PACING_DURATIONS,
    "THEME_PRESETS": ()=>THEME_PRESETS
});
const common = {
    '--gift-text': '#201b26',
    '--gift-muted': '#655f6c',
    '--gift-accent-hover': '#201b26'
};
const THEME_PRESETS = {
    'sunbeam-pop': {
        id: 'sunbeam-pop',
        name: 'Sunbeam Pop',
        tagline: 'Sunny, cheeky & joyful',
        colors: [
            '#FFD65A',
            '#FF7A59',
            '#4E67FF',
            '#63D6C2'
        ],
        cssVars: {
            ...common,
            '--gift-bg': '#FFF8DF',
            '--gift-surface': '#FFFDF4',
            '--gift-surface-alt': '#FFEFB2',
            '--gift-border': '#E8C95C',
            '--gift-accent': '#FF5E4D',
            '--gift-highlight': '#CDEFF0',
            '--gift-accent-2': '#4E67FF',
            '--gift-accent-3': '#63D6C2',
            '--gift-bg-2': '#FFE7C8'
        }
    },
    'garden-party': {
        id: 'garden-party',
        name: 'Garden Party',
        tagline: 'Fresh, playful & organic',
        colors: [
            '#B9E4C9',
            '#5E9F6B',
            '#F59B8B',
            '#8A78D8'
        ],
        cssVars: {
            ...common,
            '--gift-bg': '#F2F8EA',
            '--gift-surface': '#FFFEF8',
            '--gift-surface-alt': '#DFF0D9',
            '--gift-border': '#B9D7B4',
            '--gift-accent': '#4F8A5B',
            '--gift-highlight': '#F7C5B9',
            '--gift-accent-2': '#8A78D8',
            '--gift-accent-3': '#F59B8B',
            '--gift-bg-2': '#E4F1FF'
        }
    },
    'candy-collage': {
        id: 'candy-collage',
        name: 'Candy Collage',
        tagline: 'Colorful, quirky & scrapbooky',
        colors: [
            '#FFB5D5',
            '#A8E6CF',
            '#8DB9FF',
            '#FFD166'
        ],
        cssVars: {
            ...common,
            '--gift-bg': '#FFF1F7',
            '--gift-surface': '#FFFDFE',
            '--gift-surface-alt': '#FFE0ED',
            '--gift-border': '#F4B6D0',
            '--gift-accent': '#D94F8A',
            '--gift-highlight': '#BDEFE1',
            '--gift-accent-2': '#6A63D8',
            '--gift-accent-3': '#F2B84B',
            '--gift-bg-2': '#E7F8FF'
        }
    },
    'electric-daydream': {
        id: 'electric-daydream',
        name: 'Electric Daydream',
        tagline: 'Bold, kinetic & unexpected',
        colors: [
            '#5B5FF0',
            '#FF4FA3',
            '#B6F35B',
            '#56D9FF'
        ],
        cssVars: {
            ...common,
            '--gift-bg': '#EEF0FF',
            '--gift-surface': '#FBFBFF',
            '--gift-surface-alt': '#D9DCFF',
            '--gift-border': '#AEB4FF',
            '--gift-accent': '#5B5FF0',
            '--gift-highlight': '#FFD1EA',
            '--gift-accent-2': '#FF4FA3',
            '--gift-accent-3': '#B6F35B',
            '--gift-bg-2': '#DDF8FF'
        }
    },
    'retro-picnic': {
        id: 'retro-picnic',
        name: 'Retro Picnic',
        tagline: 'Sunny, nostalgic & graphic',
        colors: [
            '#F4C95D',
            '#E96A5F',
            '#4D9DE0',
            '#4E7D5B'
        ],
        cssVars: {
            ...common,
            '--gift-bg': '#FFF5D9',
            '--gift-surface': '#FFFCF0',
            '--gift-surface-alt': '#F9E4A7',
            '--gift-border': '#E4C66D',
            '--gift-accent': '#D8564E',
            '--gift-highlight': '#BFDDF2',
            '--gift-accent-2': '#4D9DE0',
            '--gift-accent-3': '#4E7D5B',
            '--gift-bg-2': '#FFE3D7'
        }
    },
    'paper-confetti': {
        id: 'paper-confetti',
        name: 'Paper Confetti',
        tagline: 'Bright, tactile & celebratory',
        colors: [
            '#FF8066',
            '#3BB7A7',
            '#FFC857',
            '#7B6CF6'
        ],
        cssVars: {
            ...common,
            '--gift-bg': '#FFF9F2',
            '--gift-surface': '#FFFFFF',
            '--gift-surface-alt': '#FFE9D8',
            '--gift-border': '#F1C6A8',
            '--gift-accent': '#E65B47',
            '--gift-highlight': '#BFECE4',
            '--gift-accent-2': '#7B6CF6',
            '--gift-accent-3': '#FFC857',
            '--gift-bg-2': '#E9F5FF'
        }
    },
    'midnight-cinema': {
        id: 'midnight-cinema',
        name: 'Midnight Cinema',
        tagline: 'Moody, luminous & cinematic',
        colors: [
            '#18243A',
            '#FFD166',
            '#7C6FF2',
            '#63E6BE'
        ],
        cssVars: {
            ...common,
            '--gift-bg': '#101827',
            '--gift-surface': '#172238',
            '--gift-surface-alt': '#202F4A',
            '--gift-border': '#33486B',
            '--gift-text': '#F7F3EA',
            '--gift-muted': '#A7B3C8',
            '--gift-accent': '#FFD166',
            '--gift-accent-hover': '#FFFFFF',
            '--gift-highlight': '#293A5A',
            '--gift-accent-2': '#7C6FF2',
            '--gift-accent-3': '#63E6BE',
            '--gift-bg-2': '#1B1735'
        }
    },
    'warm-sand': {
        id: 'warm-sand',
        name: 'Warm Linen & Sand',
        tagline: 'Quiet & editorial',
        colors: [
            '#F3ECE1',
            '#8A5A36',
            '#D8B07A',
            '#C9D8C0'
        ],
        cssVars: {
            ...common,
            '--gift-bg': '#F9F6F0',
            '--gift-surface': '#FFFFFF',
            '--gift-surface-alt': '#F3ECE1',
            '--gift-border': '#E2D7C7',
            '--gift-accent': '#8A5A36',
            '--gift-highlight': '#ECE2D2',
            '--gift-accent-2': '#A4B98C',
            '--gift-accent-3': '#D8B07A',
            '--gift-bg-2': '#F2E8DA'
        }
    },
    'sage-paper': {
        id: 'sage-paper',
        name: 'Sage & Parchment',
        tagline: 'Calm & natural',
        colors: [
            '#DCE8D9',
            '#3F5E4C',
            '#D69B7B',
            '#8AA4A8'
        ],
        cssVars: {
            ...common,
            '--gift-bg': '#F5F7F3',
            '--gift-surface': '#FFFFFF',
            '--gift-surface-alt': '#E8EFE6',
            '--gift-border': '#D4DED2',
            '--gift-accent': '#3F5E4C',
            '--gift-highlight': '#DCE8D9',
            '--gift-accent-2': '#8AA4A8',
            '--gift-accent-3': '#D69B7B',
            '--gift-bg-2': '#EAF0E6'
        }
    },
    'midnight-ink': {
        id: 'midnight-ink',
        name: 'Midnight Ink & Brass',
        tagline: 'Classic & dramatic',
        colors: [
            '#12151B',
            '#CDA34F',
            '#6B7EA5',
            '#D77C6A'
        ],
        cssVars: {
            ...common,
            '--gift-bg': '#12151B',
            '--gift-surface': '#181E28',
            '--gift-surface-alt': '#202836',
            '--gift-border': '#2D384B',
            '--gift-text': '#F3F5F8',
            '--gift-muted': '#8C9CB0',
            '--gift-accent': '#CDA34F',
            '--gift-highlight': '#253245',
            '--gift-accent-2': '#667AA6',
            '--gift-accent-3': '#D77C6A',
            '--gift-bg-2': '#191A2A'
        }
    },
    'terracotta-editorial': {
        id: 'terracotta-editorial',
        name: 'Terracotta & Oatmeal',
        tagline: 'Warm & artistic',
        colors: [
            '#A24F38',
            '#E4A15C',
            '#6E8B74',
            '#D7B4A1'
        ],
        cssVars: {
            ...common,
            '--gift-bg': '#F9F5F1',
            '--gift-surface': '#FFFFFF',
            '--gift-surface-alt': '#F1E7DF',
            '--gift-border': '#E0D1C5',
            '--gift-accent': '#A24F38',
            '--gift-highlight': '#EEE0D6',
            '--gift-accent-2': '#6E8B74',
            '--gift-accent-3': '#E4A15C',
            '--gift-bg-2': '#F5DFD0'
        }
    }
};
const FONT_PAIRING_CLASSES = {
    'classic-serif': {
        heading: 'font-serif font-normal tracking-tight',
        body: 'font-serif leading-relaxed',
        mono: 'font-mono text-xs tracking-wider uppercase',
        hand: 'font-hand text-lg'
    },
    'modern-sans': {
        heading: 'font-sans font-medium tracking-tight',
        body: 'font-sans leading-relaxed text-[15px]',
        mono: 'font-mono text-xs tracking-wider uppercase',
        hand: 'font-hand text-lg'
    },
    'editorial-mix': {
        heading: 'font-serif font-light tracking-tight',
        body: 'font-sans leading-relaxed text-[15px]',
        mono: 'font-mono text-xs tracking-wider uppercase',
        hand: 'font-hand text-lg'
    }
};
const PACING_DURATIONS = {
    gentle: {
        transition: 0.7,
        delay: 0.15
    },
    standard: {
        transition: 0.45,
        delay: 0.08
    },
    contemplative: {
        transition: 0.9,
        delay: 0.25
    }
};

})()),
"[project]/app/create/page.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>CreatePage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/image-plus.js [app-client] (ecmascript) <export default as ImagePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/link-2.js [app-client] (ecmascript) <export default as Link2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/music-2.js [app-client] (ecmascript) <export default as Music2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_import__("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$presentation$2f$SafeThemePresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/components/presentation/SafeThemePresets.ts [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
'use client';
;
;
;
const FEATURED = [
    {
        id: 'sunbeam-pop',
        note: 'bright / playful / hand-cut',
        motion: 'bouncing shapes + paper layers'
    },
    {
        id: 'candy-collage',
        note: 'quirky / tactile / scrapbook',
        motion: 'stickers + cut-outs + drift'
    },
    {
        id: 'garden-party',
        note: 'organic / fresh / illustrated',
        motion: 'petal-like movement + soft reveals'
    },
    {
        id: 'retro-picnic',
        note: 'warm / graphic / nostalgic',
        motion: 'print textures + stamped transitions'
    },
    {
        id: 'electric-daydream',
        note: 'bold / kinetic / unexpected',
        motion: 'geometry + kinetic type'
    },
    {
        id: 'paper-confetti',
        note: 'celebratory / tactile / bright',
        motion: 'folds + fragments + confetti'
    },
    {
        id: 'midnight-cinema',
        note: 'dark / luminous / cinematic',
        motion: 'glow + slow reveals'
    },
    {
        id: 'warm-sand',
        note: 'quiet / editorial / minimal',
        motion: 'ink lines + restrained motion'
    }
];
const MESSAGE_SUGGESTIONS = [
    {
        label: 'From the heart',
        text: "Some people make ordinary days feel a little more special just by being around. I'm really grateful you're one of those people."
    },
    {
        label: 'Sincere',
        text: "I don't always say it, but having you in my life has meant more to me than I probably realize. I hope you know how genuinely appreciated you are."
    },
    {
        label: 'Nostalgic',
        text: "It's funny how the smallest moments sometimes become the ones you remember. I'm really glad we got to collect a few of those together."
    },
    {
        label: 'Warm',
        text: "You're someone I genuinely care about, and I hope this little thing reminds you that your presence makes a difference."
    },
    {
        label: 'Birthday',
        text: "Another year of you being you. I hope this year gives you plenty of reasons to smile, a few unexpected adventures, and lots of moments worth remembering."
    },
    {
        label: 'A little deeper',
        text: "There are things that are probably easier to feel than to explain, but this much is simple: I'm really glad you're in my life."
    }
];
function isDirectAudioSource(value) {
    const src = value.trim();
    if (!src) return false;
    if (/spotify\.com|youtube\.com|youtu\.be/i.test(src)) return false;
    return src.startsWith('/uploads/') || /\.(mp3|wav|ogg|m4a|aac|webm)(?:[?#].*)?$/i.test(src);
}
function parseSpotify(value) {
    const input = value.trim();
    if (!input) return undefined;
    // Spotify track URL / URI.
    const spotifyMatch = input.match(/spotify\.com\/(?:embed\/)?(?:[^/]+\/)?track\/([A-Za-z0-9]+)/i);
    const spotifyUri = input.match(/^spotify:track:([A-Za-z0-9]+)$/i);
    const spotifyId = spotifyMatch?.[1] || spotifyUri?.[1];
    if (spotifyId) {
        const canonical = `https://open.spotify.com/track/${spotifyId}`;
        return {
            provider: 'spotify',
            trackId: spotifyId,
            title: 'Selected Spotify track',
            artist: 'Spotify',
            spotifyUrl: canonical
        };
    }
    // YouTube watch, youtu.be, shorts, live, and embed links.
    try {
        const url = new URL(input);
        const host = url.hostname.replace(/^www\./, '').replace(/^m\./, '');
        let videoId = '';
        if (host === 'youtu.be') videoId = url.pathname.split('/').filter(Boolean)[0] || '';
        else if (host === 'youtube.com' || host === 'music.youtube.com') {
            if (url.pathname === '/watch') videoId = url.searchParams.get('v') || '';
            else videoId = url.pathname.match(/^\/(?:embed|shorts|live)\/([A-Za-z0-9_-]{6,})/)?.[1] || '';
        }
        if (/^[A-Za-z0-9_-]{6,}$/.test(videoId)) {
            return {
                provider: 'youtube',
                trackId: videoId,
                title: 'YouTube soundtrack',
                artist: 'YouTube',
                spotifyUrl: `https://www.youtube.com/watch?v=${videoId}`
            };
        }
    } catch  {}
    return undefined;
}
async function resizeImage(file) {
    const data = await new Promise((resolve, reject)=>{
        const reader = new FileReader();
        reader.onload = ()=>resolve(String(reader.result));
        reader.onerror = ()=>reject(reader.error);
        reader.readAsDataURL(file);
    });
    const img = new Image();
    img.src = data;
    await new Promise((resolve, reject)=>{
        img.onload = ()=>resolve();
        img.onerror = reject;
    });
    const max = 1200;
    const scale = Math.min(1, max / Math.max(img.width, img.height));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(img.width * scale));
    canvas.height = Math.max(1, Math.round(img.height * scale));
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Could not process image');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    const compressed = canvas.toDataURL('image/jpeg', 0.82);
    return {
        id: crypto.randomUUID(),
        url: compressed,
        alt: file.name
    };
}
function CreatePage() {
    _s();
    var _s1 = __turbopack_refresh__.signature();
    const [step, setStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('candy-collage');
    const [recipient, setRecipient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [photos, setPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [spotifyUrl, setSpotifyUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [audioUrl, setAudioUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [audioTitle, setAudioTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [audioBusy, setAudioBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [syncPhotos, setSyncPhotos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [dragIndex, setDragIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [songTitle, setSongTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [songArtist, setSongArtist] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [savedId, setSavedId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [draftId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>crypto.randomUUID().replace(/-/g, '').slice(0, 10));
    const [busy, setBusy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [responseToken] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(()=>crypto.randomUUID().replace(/-/g, ''));
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$presentation$2f$SafeThemePresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_PRESETS"][selected], [
        selected
    ]);
    const chosen = FEATURED.find((x)=>x.id === selected);
    const music = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const parsed = parseSpotify(spotifyUrl.trim());
        if (!parsed) return undefined;
        return {
            ...parsed,
            title: songTitle.trim() || parsed.title,
            artist: songArtist.trim() || parsed.artist
        };
    }, [
        spotifyUrl,
        songTitle,
        songArtist
    ]);
    const useSuggestion = (text)=>setMessage(text);
    const addAudioFile = async (file)=>{
        if (!file) return;
        if (!file.type.startsWith('audio/') && !/\.(mp3|wav|ogg|m4a|aac|webm)$/i.test(file.name)) {
            setError('Please choose a direct audio file such as MP3, WAV, OGG or M4A.');
            return;
        }
        if (file.size > 10 * 1024 * 1024) {
            setError('Keep the audio file under 10 MB.');
            return;
        }
        setAudioBusy(true);
        setError('');
        try {
            const form = new FormData();
            form.append('file', file);
            form.append('giftId', draftId);
            form.append('kind', 'audio');
            const response = await fetch('/api/assets', {
                method: 'POST',
                body: form
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Upload failed');
            setAudioUrl(result.url);
            setAudioTitle(file.name.replace(/\.[^.]+$/, ''));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'The audio file could not be uploaded.');
        } finally{
            setAudioBusy(false);
        }
    };
    const reorderPhoto = (from, to)=>{
        if (from === to || from < 0 || to < 0 || from >= photos.length || to >= photos.length) return;
        setPhotos((current)=>{
            const next = [
                ...current
            ];
            const [moved] = next.splice(from, 1);
            next.splice(to, 0, moved);
            return next;
        });
    };
    const addPhotos = async (files)=>{
        if (!files) return;
        setError('');
        const incoming = Array.from(files).slice(0, 4 - photos.length);
        if (!incoming.length) return;
        setBusy(true);
        try {
            const processed = await Promise.all(incoming.map(resizeImage));
            const uploaded = await Promise.all(processed.map(async (photo, index)=>{
                const blob = await fetch(photo.url).then((r)=>r.blob());
                const form = new FormData();
                form.append('file', blob, incoming[index].name.replace(/\.[^.]+$/, '.jpg'));
                form.append('giftId', draftId);
                form.append('kind', 'image');
                const response = await fetch('/api/assets', {
                    method: 'POST',
                    body: form
                });
                const result = await response.json();
                if (!response.ok) throw new Error(result.error || 'Photo upload failed');
                return {
                    ...photo,
                    url: result.url
                };
            }));
            setPhotos((current)=>[
                    ...current,
                    ...uploaded
                ].slice(0, 4));
        } catch  {
            setError('One of the images could not be processed. Try a smaller image.');
        } finally{
            setBusy(false);
        }
    };
    const buildGift = ()=>{
        const id = draftId;
        const safeName = recipient.trim() || 'there';
        const note = message.trim() || `Happy birthday, ${safeName}. I hope this little collection makes you smile.`;
        return {
            id,
            responseToken,
            content: {
                recipient: {
                    name: safeName
                },
                occasion: 'birthday',
                stages: {
                    invitation: {
                        leadIn: 'A few things were gathered here on purpose.',
                        title: `A little something for ${safeName}.`,
                        cue: 'open the artifact',
                        actionText: 'let\'s begin'
                    },
                    introduction: {
                        headline: 'Made of small things.',
                        body: [
                            'A few memories, a few words, and one soundtrack that felt right.',
                            'Nothing too complicated. Just something assembled with you in mind.'
                        ],
                        actionText: 'keep going'
                    },
                    playful: {
                        prompt: 'Choose your truth.',
                        subtitle: 'Four tiny questions. No right answers — just little windows into how you see the world.',
                        options: [
                            {
                                id: 'coffee',
                                label: 'Treating iced coffee as an essential food group',
                                response: 'Correct. Scientific consensus pending.'
                            },
                            {
                                id: 'tabs',
                                label: 'Keeping far too many browser tabs open',
                                response: 'There is absolutely a system. Nobody else is allowed to understand it.'
                            },
                            {
                                id: 'plans',
                                label: 'Being suspiciously happy when plans get cancelled',
                                response: 'An unexpectedly free evening is a small luxury.'
                            }
                        ],
                        payoff: 'Good. Baseline established.',
                        questions: [
                            {
                                id: 'plans',
                                prompt: 'Choose your truth.',
                                subtitle: 'When plans suddenly disappear, what is your first reaction?',
                                options: [
                                    {
                                        id: 'free',
                                        label: 'Finally. An evening with absolutely no obligations.',
                                        response: 'The cancelled-plan glow is real.'
                                    },
                                    {
                                        id: 'prepared',
                                        label: 'Wait… but I had already mentally prepared for it.',
                                        response: 'A carefully constructed plan deserves its moment.'
                                    },
                                    {
                                        id: 'invent',
                                        label: 'Depends. I may immediately invent a better plan.',
                                        response: 'Spontaneous energy detected.'
                                    }
                                ]
                            },
                            {
                                id: 'compliment',
                                prompt: 'A tiny window into your brain.',
                                subtitle: 'What kind of compliment actually stays with you?',
                                options: [
                                    {
                                        id: 'comfort',
                                        label: 'You make people feel comfortable being themselves.',
                                        response: 'That says a lot about what you value.'
                                    },
                                    {
                                        id: 'skill',
                                        label: 'You are ridiculously good at what you do.',
                                        response: 'Quiet competence is hard to fake.'
                                    },
                                    {
                                        id: 'fun',
                                        label: 'You make ordinary things more fun.',
                                        response: 'You notice atmosphere, not just outcomes.'
                                    }
                                ]
                            },
                            {
                                id: 'memory',
                                prompt: 'Pick the kind of memory you would keep.',
                                subtitle: 'If you could preserve one ordinary moment forever…',
                                options: [
                                    {
                                        id: 'talk',
                                        label: 'A late-night conversation that went nowhere and everywhere.',
                                        response: 'You remember connection.'
                                    },
                                    {
                                        id: 'laugh',
                                        label: 'A completely stupid moment that still makes you laugh.',
                                        response: 'You remember joy.'
                                    },
                                    {
                                        id: 'peace',
                                        label: 'A quiet place where you felt completely at peace.',
                                        response: 'You remember feeling.'
                                    }
                                ]
                            },
                            {
                                id: 'future',
                                prompt: 'Last one. No overthinking.',
                                subtitle: 'Which future sounds most like you?',
                                options: [
                                    {
                                        id: 'stories',
                                        label: 'A life full of stories I can’t believe actually happened.',
                                        response: 'Curiosity wins.'
                                    },
                                    {
                                        id: 'meaning',
                                        label: 'A life that feels calm, meaningful and very much mine.',
                                        response: 'Depth wins.'
                                    },
                                    {
                                        id: 'people',
                                        label: 'A life where the people I love are doing well too.',
                                        response: 'People matter to you.'
                                    }
                                ]
                            }
                        ]
                    },
                    moments: {
                        sectionTitle: 'A few things worth keeping',
                        subtitle: 'The message, photos and soundtrack you chose live here.',
                        items: [
                            {
                                id: 'personal-message',
                                type: 'message',
                                heading: 'Something I wanted to say',
                                body: note,
                                tag: 'FROM THE HEART',
                                attachments: {
                                    photos,
                                    music
                                }
                            }
                        ]
                    },
                    realization: {
                        headline: 'None of this was random.',
                        threads: [
                            {
                                clue: 'The words, the pictures, the song...',
                                subtext: 'Each one was chosen because it reminded me of you.'
                            },
                            {
                                clue: 'The tiny habits are the real clues.',
                                subtext: 'The things you barely notice are often the things other people remember.'
                            },
                            {
                                clue: 'The way you make ordinary moments feel.',
                                subtext: 'That feeling is harder to photograph, but impossible to miss.'
                            },
                            {
                                clue: 'Put the pieces together.',
                                subtext: 'This is where the little observations become one very specific person.'
                            }
                        ],
                        realizationMessage: `This little world was put together for ${safeName}, one choice at a time.`
                    },
                    appreciation: {
                        headline: `Happy Birthday, ${safeName}.`,
                        paragraphs: [
                            note,
                            'I hope the year ahead gives you plenty of reasons to be happy, curious, and completely yourself.'
                        ],
                        warmSignoff: 'Made with a lot of thought'
                    },
                    ending: {
                        birthdayWish: 'Wishing you a really wonderful year ahead.',
                        closingThought: 'Keep the good moments close.',
                        pressureFreeNote: 'No need to reply. Just enjoy the moment.',
                        allowReplay: true
                    }
                }
            },
            presentation: {
                themeId: selected,
                templateId: selected,
                fontPairing: 'editorial-mix',
                pacing: 'standard',
                audio: isDirectAudioSource(audioUrl) ? {
                    src: audioUrl.trim(),
                    title: audioTitle.trim() || 'Background soundtrack',
                    artist: songArtist.trim() || undefined,
                    volume: 0.55,
                    loop: true,
                    sourceType: audioUrl.startsWith('/uploads/') ? 'uploaded-file' : 'direct-url'
                } : undefined,
                spotifyFallback: music,
                syncPhotosToMusic: syncPhotos
            }
        };
    };
    const saveGift = async ()=>{
        setBusy(true);
        setError('');
        try {
            const gift = buildGift();
            const response = await fetch('/api/gifts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(gift)
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.error || 'Could not save the gift.');
            setSavedId(result.giftId);
            setStep(3);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Could not save the gift.');
        } finally{
            setBusy(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "creator-studio min-h-screen bg-[#f7f3eb] text-[#211d25] px-4 py-5 sm:px-8 lg:px-12 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-[1500px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "creator-header",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-mono text-[10px] tracking-[.25em] uppercase text-black/45",
                                children: "A Little Something / Creator Studio"
                            }, void 0, false, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 263,
                                columnNumber: 16
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-[clamp(2.7rem,6vw,6.5rem)] leading-[.82] tracking-[-.06em] mt-4",
                                children: [
                                    "Make the moment.",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 245
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        children: "Make it yours."
                                    }, void 0, false, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 263,
                                        columnNumber: 250
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/create/page.tsx",
                                lineNumber: 263,
                                columnNumber: 133
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/create/page.tsx",
                        lineNumber: 263,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/create/page.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "creator-progress",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: step >= 1 ? 'active' : '',
                            children: "01 / WORLD"
                        }, void 0, false, {
                            fileName: "[project]/app/create/page.tsx",
                            lineNumber: 266,
                            columnNumber: 43
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: step >= 2 ? 'active' : '',
                            children: "02 / MOMENT"
                        }, void 0, false, {
                            fileName: "[project]/app/create/page.tsx",
                            lineNumber: 266,
                            columnNumber: 104
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: step >= 3 ? 'active' : '',
                            children: "03 / PREVIEW"
                        }, void 0, false, {
                            fileName: "[project]/app/create/page.tsx",
                            lineNumber: 266,
                            columnNumber: 166
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/create/page.tsx",
                    lineNumber: 266,
                    columnNumber: 9
                }, this),
                step === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "creator-step-grid",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "creator-kicker",
                                    children: "01 / VISUAL LANGUAGE"
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "creator-title",
                                    children: [
                                        "Choose the world",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 113
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "your story lives in."
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 118
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 270,
                                    columnNumber: 67
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "template-grid cinematic-template-grid",
                                    children: FEATURED.map((entry, index)=>{
                                        const item = __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$presentation$2f$SafeThemePresets$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["THEME_PRESETS"][entry.id];
                                        const active = selected === entry.id;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setSelected(entry.id),
                                            className: `template-choice cinematic-template-choice ${active ? 'selected' : ''}`,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `template-choice-art world-scene world-${entry.id}`,
                                                    style: {
                                                        '--world-a': item.colors[0],
                                                        '--world-b': item.colors[1],
                                                        '--world-c': item.colors[2],
                                                        '--world-d': item.colors[3]
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "world-grid"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 17
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "world-orbit world-orbit-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 47
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "world-orbit world-orbit-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 92
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "world-plane world-plane-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 137
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "world-plane world-plane-2"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 182
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "world-scan"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 227
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "world-core",
                                                            children: "✦"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 273,
                                                            columnNumber: 257
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "template-number",
                                                            children: [
                                                                "0",
                                                                index + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 17
                                                        }, this),
                                                        active && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "template-check",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/create/page.tsx",
                                                                lineNumber: 274,
                                                                columnNumber: 110
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 77
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "template-hand",
                                                            children: entry.id === 'midnight-cinema' ? 'after dark' : entry.id === 'electric-daydream' ? 'move this' : entry.id === 'retro-picnic' ? 'remember this' : 'made of little things'
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 274,
                                                            columnNumber: 136
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-5",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-start justify-between gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "font-serif text-2xl leading-none",
                                                                    children: item.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 92
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "font-mono text-[8px] uppercase tracking-wider opacity-40 text-right",
                                                                    children: entry.note
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 276,
                                                                    columnNumber: 157
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 36
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-black/50 mt-3",
                                                            children: entry.motion
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 276,
                                                            columnNumber: 268
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, entry.id, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 173
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 271,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create/page.tsx",
                            lineNumber: 269,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "creator-side-panel",
                            style: {
                                '--preview-bg': theme.colors[0],
                                '--preview-accent': theme.colors[2],
                                '--preview-accent2': theme.colors[1]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `creator-artifact-preview cinematic-preview preview-${selected}`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-film"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 95
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "creator-orbit a"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 126
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "creator-orbit b"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 160
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "creator-core",
                                            children: "✦"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 194
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-radial"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 231
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-caption",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        "LIVE WORLD / ",
                                                        String(FEATURED.findIndex((x)=>x.id === selected) + 1).padStart(2, '0')
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 297
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: theme.name
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 389
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 264
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: theme.tagline
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 451
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    children: [
                                                        "A little",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 485
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            children: "something."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 280,
                                                            columnNumber: 490
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 473
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: chosen.motion
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 512
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 420
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-microgrid"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 546
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 280,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "creator-side-copy",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 48
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            children: theme.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 69
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: theme.tagline
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 90
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "creator-field",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Recipient name / nickname"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 145
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: recipient,
                                                    onChange: (e)=>setRecipient(e.target.value),
                                                    placeholder: "their name"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 183
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 112
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "creator-primary",
                                            onClick: ()=>setStep(2),
                                            children: [
                                                "Build the moment ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 15
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 364
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 281,
                                            columnNumber: 286
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 281,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create/page.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/create/page.tsx",
                    lineNumber: 268,
                    columnNumber: 24
                }, this),
                step === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "moment-builder",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "builder-main",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "creator-back",
                                    onClick: ()=>setStep(1),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 287,
                                            columnNumber: 71
                                        }, this),
                                        " back to world"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 287,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "creator-kicker",
                                    children: "02 / THE MOMENT"
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "creator-title",
                                    children: [
                                        "Write something",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 107
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "they'll keep."
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 112
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 288,
                                    columnNumber: 62
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "message-editor",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "editor-label",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "YOUR NOTE"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 75
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        message.length,
                                                        " / 1200"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 97
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 45
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            maxLength: 1200,
                                            value: message,
                                            onChange: (e)=>setMessage(e.target.value),
                                            placeholder: "Write it the way you would actually say it..."
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 139
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "suggestion-heading",
                                            children: "Need a starting point?"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 285
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "suggestion-row",
                                            children: MESSAGE_SUGGESTIONS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: _s1(()=>{
                                                        _s1();
                                                        return useSuggestion(s.text);
                                                    }, "Tm3IhIaFQeTaErUPTEGljA7SgqU=", false, function() {
                                                        return [
                                                            useSuggestion
                                                        ];
                                                    }),
                                                    children: s.label
                                                }, s.label, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 409
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 289,
                                            columnNumber: 349
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 289,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "builder-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "builder-section-title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "03 / PHOTO-MUSIC TIMELINE"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 85
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "optional · up to 4 · drag to reorder"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 123
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 46
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "photo-drop",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2d$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImagePlus$3e$__["ImagePlus"], {
                                                    size: 22
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 210
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: busy ? 'processing...' : 'Drop memories here or choose photos'
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 232
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "JPG / PNG · compressed for the prototype"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 305
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    multiple: true,
                                                    onChange: (e)=>addPhotos(e.target.files),
                                                    disabled: busy || photos.length >= 4
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 360
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 180
                                        }, this),
                                        photos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "uploaded-photos",
                                            children: photos.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `uploaded-photo ${dragIndex === i ? 'is-dragging' : ''}`,
                                                    draggable: true,
                                                    onDragStart: ()=>setDragIndex(i),
                                                    onDragOver: (e)=>e.preventDefault(),
                                                    onDrop: ()=>{
                                                        if (dragIndex !== null) reorderPhoto(dragIndex, i);
                                                        setDragIndex(null);
                                                    },
                                                    onDragEnd: ()=>setDragIndex(null),
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "photo-order",
                                                            children: [
                                                                "0",
                                                                i + 1
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 840
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: p.url,
                                                            alt: p.alt || `Memory ${i + 1}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 883
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>setPhotos((ps)=>ps.filter((x)=>x.id !== p.id)),
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                size: 13
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/create/page.tsx",
                                                                lineNumber: 291,
                                                                columnNumber: 1009
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 932
                                                        }, this)
                                                    ]
                                                }, p.id, true, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 562
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 510
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "timeline-sync",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: syncPhotos,
                                                    onChange: (e)=>setSyncPhotos(e.target.checked)
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 1080
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Sync photos to fade dynamically while music plays."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 1177
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                            children: "ON by default · photo progression follows the soundtrack when direct audio is available."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 291,
                                                            columnNumber: 1244
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 291,
                                                    columnNumber: 1171
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 291,
                                            columnNumber: 1047
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 291,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "builder-section audio-section",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "builder-section-title",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "04 / SOUNDTRACK"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 99
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                    children: "dual-mode audio"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 127
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 60
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "dual-audio-grid",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "audio-mode-card primary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "audio-mode-head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {}, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 270
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "Primary Background Audio (Highly Recommended)"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/create/page.tsx",
                                                                            lineNumber: 293,
                                                                            columnNumber: 284
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                            children: "Direct MP3 / audio URL or upload"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/create/page.tsx",
                                                                            lineNumber: 293,
                                                                            columnNumber: 346
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 279
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 237
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: audioUrl.startsWith('data:') ? '' : audioUrl,
                                                            onChange: (e)=>setAudioUrl(e.target.value),
                                                            placeholder: "https://example.com/song.mp3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 405
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            className: "audio-upload",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: audioBusy ? 'loading audio…' : 'Upload .mp3 / audio file'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 580
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "file",
                                                                    accept: "audio/*,.mp3,.wav,.ogg,.m4a",
                                                                    onChange: (e)=>addAudioFile(e.target.files?.[0]),
                                                                    disabled: audioBusy
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 648
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 548
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: audioTitle,
                                                            onChange: (e)=>setAudioTitle(e.target.value),
                                                            placeholder: "Track title (optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 782
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "audio-guarantee",
                                                            children: "Direct audio plays from the recipient's explicit gift-box interaction. It is the browser-safe route for background playback; no web app can honestly guarantee autoplay in every browser/device configuration."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 890
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 196
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "audio-mode-card secondary",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "audio-mode-head",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {}, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 1213
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "YouTube or Spotify Link"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/create/page.tsx",
                                                                            lineNumber: 293,
                                                                            columnNumber: 1227
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                            children: "YouTube / Spotify link · compact recipient player"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/create/page.tsx",
                                                                            lineNumber: 293,
                                                                            columnNumber: 1267
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 1222
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 1180
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            value: spotifyUrl,
                                                            onChange: (e)=>setSpotifyUrl(e.target.value),
                                                            placeholder: "Paste a YouTube or Spotify song URL"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 1343
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "grid sm:grid-cols-2 gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: songTitle,
                                                                    onChange: (e)=>setSongTitle(e.target.value),
                                                                    placeholder: "Song title"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 1507
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    value: songArtist,
                                                                    onChange: (e)=>setSongArtist(e.target.value),
                                                                    placeholder: "Artist"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 1601
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 1464
                                                        }, this),
                                                        spotifyUrl && !music && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-[11px] text-red-700",
                                                            children: "Paste a valid YouTube video or Spotify track URL."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 1722
                                                        }, this),
                                                        music && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "music-attached",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "✓ Music link ready"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 1856
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                    children: music.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 1887
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                                                    children: music.artist
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/create/page.tsx",
                                                                    lineNumber: 293,
                                                                    columnNumber: 1917
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/create/page.tsx",
                                                            lineNumber: 293,
                                                            columnNumber: 1824
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 293,
                                                    columnNumber: 1137
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 163
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "music-note",
                                            children: "YouTube starts muted in the background where autoplay is allowed. Tap the small CD icon to open its player and enable sound if the browser blocks autoplay. Spotify playback requires the recipient to use the Spotify embed controls; a pasted Spotify URL cannot be converted into a raw background audio stream."
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 293,
                                            columnNumber: 1965
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "creator-error",
                                    children: error
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 294,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "builder-actions",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "creator-back",
                                            onClick: ()=>setStep(1),
                                            children: "← change world"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 46
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "creator-secondary",
                                            onClick: ()=>setStep(3),
                                            children: "Continue to create link"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 295,
                                            columnNumber: 127
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create/page.tsx",
                            lineNumber: 286,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                            className: "live-moment-preview",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "preview-stamp",
                                    children: "LIVE RECIPIENT PREVIEW"
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 50
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "preview-paper",
                                    style: {
                                        '--preview-bg': theme.colors[0]
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-scribble",
                                            children: [
                                                "for ",
                                                recipient || 'someone special',
                                                " ↗"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 204
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-serif text-4xl leading-none",
                                            children: message ? 'Something I wanted to say.' : 'Your words will live here.'
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 282
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "preview-message",
                                            children: message || 'Start writing on the left. This preview changes as you create.'
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 407
                                        }, this),
                                        photos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-photo-stack",
                                            children: photos.slice(0, 3).map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: p.url,
                                                    style: {
                                                        transform: `rotate(${i % 2 ? -4 + i * 2 : 3 - i}deg) translateY(${i * 8}px)`
                                                    },
                                                    alt: ""
                                                }, p.id, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 604
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 537
                                        }, this),
                                        music && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "preview-track",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$music$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Music2$3e$__["Music2"], {
                                                    size: 13
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 760
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: [
                                                        music.title,
                                                        " · ",
                                                        music.artist
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 779
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "♪"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 822
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 729
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 298,
                                    columnNumber: 109
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create/page.tsx",
                            lineNumber: 298,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/create/page.tsx",
                    lineNumber: 285,
                    columnNumber: 24
                }, this),
                step === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "final-preview",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "creator-back",
                                    onClick: ()=>setStep(2),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                            size: 14
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 122
                                        }, this),
                                        " edit moment"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 64
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "creator-kicker",
                                    children: "03 / READY"
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 165
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "creator-title",
                                    children: [
                                        "It looks like",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 252
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            children: "a little world."
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 257
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 209
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "final-copy",
                                    children: [
                                        recipient || 'Your recipient',
                                        " will enter the ",
                                        theme.name,
                                        " world, discover your note, see the photos you selected, and meet the soundtrack after their first tap."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 284
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "final-actions",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "creator-primary",
                                        onClick: saveGift,
                                        disabled: busy || !!savedId,
                                        children: [
                                            savedId ? 'Gift link created' : busy ? 'Creating your gift…' : 'Create gift link',
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                size: 15
                                            }, void 0, false, {
                                                fileName: "[project]/app/create/page.tsx",
                                                lineNumber: 301,
                                                columnNumber: 675
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/create/page.tsx",
                                        lineNumber: 301,
                                        columnNumber: 507
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 476
                                }, this),
                                savedId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "created-link",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "SHAREABLE RECIPIENT LINK"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 751
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            id: "recipient-share-url",
                                            children: typeof window !== 'undefined' ? `${window.location.origin}/g/${savedId}` : `/g/${savedId}`
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 788
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            className: "creator-secondary",
                                            onClick: ()=>{
                                                const url = `${window.location.origin}/g/${savedId}`;
                                                void navigator.clipboard.writeText(url);
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link2$3e$__["Link2"], {
                                                    size: 14
                                                }, void 0, false, {
                                                    fileName: "[project]/app/create/page.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 1085
                                                }, this),
                                                " Copy recipient link"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 918
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
                                            children: "Send this link directly to the recipient. The creator studio does not open the recipient experience, so you can keep the reveal a surprise. Test the link only if you explicitly choose to; the recipient should be the first to experience the gift."
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 1132
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            className: "response-room-link",
                                            href: `/responses/${savedId}?token=${responseToken}`,
                                            target: "_blank",
                                            rel: "noreferrer",
                                            children: "Private personality answers →"
                                        }, void 0, false, {
                                            fileName: "[project]/app/create/page.tsx",
                                            lineNumber: 301,
                                            columnNumber: 1392
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 721
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create/page.tsx",
                            lineNumber: 301,
                            columnNumber: 59
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "final-artifact",
                            style: {
                                '--preview-bg': theme.colors[0],
                                '--preview-accent': theme.colors[2]
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "final-orbit"
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 1690
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "final-star",
                                    children: "✦"
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 1720
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "FOR"
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 1755
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: recipient || 'someone special'
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 1765
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: theme.name
                                }, void 0, false, {
                                    fileName: "[project]/app/create/page.tsx",
                                    lineNumber: 301,
                                    columnNumber: 1806
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/create/page.tsx",
                            lineNumber: 301,
                            columnNumber: 1559
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/create/page.tsx",
                    lineNumber: 301,
                    columnNumber: 24
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/create/page.tsx",
            lineNumber: 261,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/create/page.tsx",
        lineNumber: 260,
        columnNumber: 5
    }, this);
}
_s(CreatePage, "H71UC5NdnEUh1tB2F4i9XOhsEFA=");
_c = CreatePage;
var _c;
__turbopack_refresh__.register(_c, "CreatePage");

})()),
"[project]/app/create/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=_f2b956._.js.map