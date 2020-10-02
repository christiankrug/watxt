
export function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

export function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

var global = require('./_global');
var core = require('./_core');
var hide = require('./_hide');
var redefine = require('./_redefine');
var ctx = require('./_ctx');
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

import { AnimationData } from '../types/animationData';
import { layoutType } from '../types/layoutType';
import { LocaleData } from '../types/localeData';
import { transformData } from '../types/transformData';

export const gameConstants: GameConstants = {
    transform: undefined,
    gameVersion: '1.0.19',
    gameName: 'NG Club Wheel',
    appWidth: 1920,
    appHeight: 1080,
    contentWidth: 0,
    gameContentWidth: 0,
    scaleFactor: 1,
    segmentPattern: [
        { index: 9, version: 1 },
        { index: 1, version: 1 },
        { index: 5, version: 1 },
        { index: 3, version: 1 },
        { index: 7, version: 1 },
        { index: 0, version: 2 },
        { index: 8, version: 2 },
        { index: 6, version: 2 },
        { index: 4, version: 2 },
        { index: 2, version: 2 },
    ],
    infoContent: {
        desktop: {
            minimumWidth: 1200,
        },
        mobile: {
            minimumWidth: 300,
        },
    },
    contentSize: {
        mobile: {
            maximumWidth: 700,
        },
        desktop: {
            maximumWidth: 1200,
        },
    },
    appSize: {
        mobile: {
            maximumHeight: 700,
        },
        desktop: {
            maximumHeight: 700,
        },
    },
    deviceTypes: {
        mobile: 'mobile',
        desktop: 'desktop',
        tablet: 'tablet',
    },
    events: {
        mobile: {
            touch: 'pointertap',
            touchStart: 'touchstart',
            touchEnd: 'touchendoutside',
            over: 'pointerover',
            out: 'pointerout',
        },
        desktop: {
            touch: 'pointertap',
            touchStart: 'pointerdown',
            touchEnd: 'pointerupoutside',
            over: 'pointerover',
            out: 'pointerout',
        },
        touch: 'pointertap',
        over: 'pointerover',
        out: 'pointerout',
    },
    borderLights: {
        amount: 72,
        speed: {
            normal: 150,
            fast: 100,
            slow: 200,
        },
        patterns: {
            normal: [
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
                1,
                1,
                1,
                0,
                0,
                0,
                0,
                0,
                0,
            ],
            alternating: [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        },
    },
    prizeID: {},
    timer: {
        hurryTime: 300,
    },
    redirects: {
        redirect: '/casino',
        deposit: '/payment/top-up',
    },
};

interface GameConstants {
    animationData?: AnimationData;
    transform?: transformData;
    fontStyles?: any;
    locale?: LocaleData;
    gameVersion: string;
    gameName: string;
    appWidth: number;
    gameContentWidth: number;
    appHeight: number;
    contentWidth: number;
    scaleFactor: number;
    segmentPattern: SegmentPattern[];
    infoContent: MapTyped<DeviceTyped<{ minimumWidth: number }>, 'mobile' | 'desktop'>;
    contentSize: MapTyped<DeviceTyped<{ maximumWidth: number }>, 'mobile' | 'desktop'>;
    appSize: MapTyped<DeviceTyped<{ maximumHeight: number }>, 'mobile' | 'desktop'>;
    deviceTypes: deviceType;
    events: any;
    borderLights: {
        amount: number;
        speed: Speed<number>;
        patterns: Pattern<number[]>;
    };
    prizeID: any;
    timer: any;
    redirects: {
        redirect: string;
        deposit: string;
    };
}

interface DeviceTyped<dataT> {
    mobile: dataT;
    desktop: dataT;
}

interface deviceType {
    mobile: layoutType;
    desktop: layoutType;
    tablet: string;
}

interface SegmentPattern {
    index: number;
    version: number;
}

type MapTyped<Type, Keys extends keyof Type> = { [Key in Keys]: Type[Key] };

interface Pattern<T> {
    [key: string]: T;
}

interface Speed<T> {
    [key: string]: T;
}

'use strict';

exports.__esModule = true;
exports.loader = exports.prepare = exports.particles = exports.mesh = exports.loaders = exports.interaction = exports.filters = exports.extras = exports.extract = exports.accessibility = undefined;

var _polyfill = require('./polyfill');

Object.keys(_polyfill).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _polyfill[key];
        }
    });
});

var _core = require('./core');

Object.keys(_core).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _core[key];
        }
    });
});

var _deprecation = require('./deprecation');

var _deprecation2 = _interopRequireDefault(_deprecation);

var _accessibility = require('./accessibility');

var accessibility = _interopRequireWildcard(_accessibility);

var _extract = require('./extract');

var extract = _interopRequireWildcard(_extract);

var _extras = require('./extras');

var extras = _interopRequireWildcard(_extras);

var _filters = require('./filters');

var filters = _interopRequireWildcard(_filters);

var _interaction = require('./interaction');

var interaction = _interopRequireWildcard(_interaction);

var _loaders = require('./loaders');

var loaders = _interopRequireWildcard(_loaders);

var _mesh = require('./mesh');

var mesh = _interopRequireWildcard(_mesh);

var _particles = require('./particles');

var particles = _interopRequireWildcard(_particles);

var _prepare = require('./prepare');

var prepare = _interopRequireWildcard(_prepare);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// export core
_core.utils.mixins.performMixins();

/**
 * Alias for {@link PIXI.loaders.shared}.
 * @name loader
 * @memberof PIXI
 * @type {PIXI.loader.Loader}
 */


// handle mixins now, after all code has been added, including deprecation


// export libs
// import polyfills. Done as an export to make sure polyfills are imported first
var loader = loaders.shared || null;

exports.accessibility = accessibility;
exports.extract = extract;
exports.extras = extras;
exports.filters = filters;
exports.interaction = interaction;
exports.loaders = loaders;
exports.mesh = mesh;
exports.particles = particles;
exports.prepare = prepare;
exports.loader = loader;

// Apply the deprecations

if (typeof _deprecation2.default === 'function') {
    (0, _deprecation2.default)(exports);
}

// Always export PixiJS globally.
global.PIXI = exports; // eslint-disable-line
//# sourceMappingURL=index.js.map
import { MainTimer } from '../mediators/mainTimer';
import { ISpinsLeftMediator } from '../mediators/spinsLeftMediator';
import { ITimerMediator } from '../mediators/timerMediator';
import { IWheelMediator } from '../mediators/wheel/wheelMediator';
import { BaseGlobalStore, IBaseGlobalStore } from '../utils/baseGlobalStore';
import { IWheelCenterView } from '../views/wheel/wheelCenterView';
import { gameStore } from './gameStore';
import { InitData } from 'src/types/initData';

export interface IConfigStore extends IBaseGlobalStore {
    updateConfig(): void;
    initConfig(config: any): Promise<void>;
    setUpdateConfigData(id: string, value: any): void;
    checkLock(): Promise<void>;
}

export class ConfigStore extends BaseGlobalStore implements IConfigStore {

    private updateConfigObj: any;
    private configUpdateEnable: boolean;
    private scenarioStep: number = 0;

    constructor() {
        super('ConfigStore');
        this.dataContainer.assetRoot = null;
        this.dataContainer.loadScreenAssetRoot = null;
        this.dataContainer.loadScreenName = null;
        this.dataContainer.manifestName = null;
        this.dataContainer.wheelData = null;
        this.dataContainer.canSpin = null;
        this.dataContainer.local = null;
        this.dataContainer.currentDateTime = null;
        this.dataContainer.nextSpinExpiration = null;
        this.dataContainer.spinsLeft = null;
        this.dataContainer.spin = null;
        this.dataContainer.initialize = null;
        this.dataContainer.redirectUrl = null;
        this.dataContainer.depositUrl = null;
        this.dataContainer.deviceType = 'desktop';
        this.dataContainer.currentDevice = '';
        this.dataContainer.layoutType = 'desktop';

        this.updateConfigObj = null;
    }
    public async checkLock(): Promise<void> {
        gameStore.getData('popupDeposit').setVisible(false);
        gameStore.getData('popupWheelLocked').setVisible(false);
        if (this.dataContainer.spinsLeft > 0) {
            if (this.dataContainer.canSpin) {
                gameStore.setData('mainTimer', new MainTimer());
                gameStore.getDataAs<ITimerMediator>('timer').setTimerVisibility(true);
                setTimeout(() => {
                    gameStore.getDataAs<IWheelMediator>('wheel').getWheelCenter().getViewAs<IWheelCenterView>().getWheelCenterButtonView().setInteractive(true);
                }, 800);

            } else {
                gameStore.setData('mainTimer', new MainTimer());
                gameStore.getData('popupDeposit').setVisible(true);
                gameStore.getDataAs<ITimerMediator>('timer').setTimerVisibility(true);
                gameStore.getDataAs<IWheelMediator>('wheel').getWheelCenter().getViewAs<IWheelCenterView>().getWheelCenterButtonView().setInteractive(false);
            }

        } else {
            gameStore.getData('popupWheelLocked').setVisible(true);
            gameStore.getDataAs<IWheelMediator>('wheel').getWheelCenter().getViewAs<IWheelCenterView>().getWheelCenterButtonView().setInteractive(false);
            gameStore.getDataAs<ITimerMediator>('timer').setTimerVisibility(false);
        }
    }

    public async initConfig(config: any): Promise<void> {
        this.setData('local', config.locale);
        this.setData('spin', config.spin);
        this.setData('initialize', config.initialize);
        this.setData('redirectUrl', config.redirectUrl);
        this.setData('depositUrl', config.depositUrl);

        let initialize: () => Promise<InitData> = this.dataContainer.initialize;
   
        try {
            const initData = await initialize();
            this.setData('wheelData', initData.wheelData);
            this.setData('spinsLeft', initData.spinsLeft);
            this.setData('currentDateTime', initData.currentDateTime);
            this.setData('nextSpinExpiration', initData.nextSpinExpiration);
            this.setData('canSpin', initData.canSpin);
        } catch(err) {
            throw new Error('error error while receiving initialize data from server: ' + err);
        }
        
    }

    public async updateConfig(): Promise<void> {
        let initialize: () => Promise<InitData> = this.dataContainer.initialize;

        try {
            const initData = await initialize();
            this.setData('wheelData', initData.wheelData);
            this.setData('spinsLeft', initData.spinsLeft);
            this.setData('currentDateTime', initData.currentDateTime);
            this.setData('nextSpinExpiration', initData.nextSpinExpiration);
            gameStore.getDataAs<ISpinsLeftMediator>('spinsLeft').updateConfig();
            await this.checkLock();
        } catch(err) {
            throw new Error('error error while updating the config: ' + err);
        }

        this.scenarioStep++;

    }

    public setUpdateConfigData(id: string, value: any): void {
        if (this.updateConfigObj === null) {
            this.updateConfigObj = {};
        }
        this.updateConfigObj[id] = value;
    }
}

export const configStore = (function createConfigStore(): ConfigStore {
    const store = new ConfigStore();
    return store;
})();

'use strict';

exports.__esModule = true;
/**
 * String of the current PIXI version.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name VERSION
 * @type {string}
 */
var VERSION = exports.VERSION = '4.8.8';

/**
 * Two Pi.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {number}
 */
var PI_2 = exports.PI_2 = Math.PI * 2;

/**
 * Conversion factor for converting radians to degrees.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {number}
 */
var RAD_TO_DEG = exports.RAD_TO_DEG = 180 / Math.PI;

/**
 * Conversion factor for converting degrees to radians.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {number}
 */
var DEG_TO_RAD = exports.DEG_TO_RAD = Math.PI / 180;

/**
 * Constant to identify the Renderer Type.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name RENDERER_TYPE
 * @type {object}
 * @property {number} UNKNOWN - Unknown render type.
 * @property {number} WEBGL - WebGL render type.
 * @property {number} CANVAS - Canvas render type.
 */
var RENDERER_TYPE = exports.RENDERER_TYPE = {
  UNKNOWN: 0,
  WEBGL: 1,
  CANVAS: 2
};

/**
 * Various blend modes supported by PIXI.
 *
 * IMPORTANT - The WebGL renderer only supports the NORMAL, ADD, MULTIPLY and SCREEN blend modes.
 * Anything else will silently act like NORMAL.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name BLEND_MODES
 * @type {object}
 * @property {number} NORMAL
 * @property {number} ADD
 * @property {number} MULTIPLY
 * @property {number} SCREEN
 * @property {number} OVERLAY
 * @property {number} DARKEN
 * @property {number} LIGHTEN
 * @property {number} COLOR_DODGE
 * @property {number} COLOR_BURN
 * @property {number} HARD_LIGHT
 * @property {number} SOFT_LIGHT
 * @property {number} DIFFERENCE
 * @property {number} EXCLUSION
 * @property {number} HUE
 * @property {number} SATURATION
 * @property {number} COLOR
 * @property {number} LUMINOSITY
 */
var BLEND_MODES = exports.BLEND_MODES = {
  NORMAL: 0,
  ADD: 1,
  MULTIPLY: 2,
  SCREEN: 3,
  OVERLAY: 4,
  DARKEN: 5,
  LIGHTEN: 6,
  COLOR_DODGE: 7,
  COLOR_BURN: 8,
  HARD_LIGHT: 9,
  SOFT_LIGHT: 10,
  DIFFERENCE: 11,
  EXCLUSION: 12,
  HUE: 13,
  SATURATION: 14,
  COLOR: 15,
  LUMINOSITY: 16,
  NORMAL_NPM: 17,
  ADD_NPM: 18,
  SCREEN_NPM: 19
};

/**
 * Various webgl draw modes. These can be used to specify which GL drawMode to use
 * under certain situations and renderers.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name DRAW_MODES
 * @type {object}
 * @property {number} POINTS
 * @property {number} LINES
 * @property {number} LINE_LOOP
 * @property {number} LINE_STRIP
 * @property {number} TRIANGLES
 * @property {number} TRIANGLE_STRIP
 * @property {number} TRIANGLE_FAN
 */
var DRAW_MODES = exports.DRAW_MODES = {
  POINTS: 0,
  LINES: 1,
  LINE_LOOP: 2,
  LINE_STRIP: 3,
  TRIANGLES: 4,
  TRIANGLE_STRIP: 5,
  TRIANGLE_FAN: 6
};

/**
 * The scale modes that are supported by pixi.
 *
 * The {@link PIXI.settings.SCALE_MODE} scale mode affects the default scaling mode of future operations.
 * It can be re-assigned to either LINEAR or NEAREST, depending upon suitability.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @name SCALE_MODES
 * @type {object}
 * @property {number} LINEAR Smooth scaling
 * @property {number} NEAREST Pixelating scaling
 */
var SCALE_MODES = exports.SCALE_MODES = {
  LINEAR: 0,
  NEAREST: 1
};

/**
 * The wrap modes that are supported by pixi.
 *
 * The {@link PIXI.settings.WRAP_MODE} wrap mode affects the default wrapping mode of future operations.
 * It can be re-assigned to either CLAMP or REPEAT, depending upon suitability.
 * If the texture is non power of two then clamp will be used regardless as webGL can
 * only use REPEAT if the texture is po2.
 *
 * This property only affects WebGL.
 *
 * @static
 * @constant
 * @name WRAP_MODES
 * @memberof PIXI
 * @type {object}
 * @property {number} CLAMP - The textures uvs are clamped
 * @property {number} REPEAT - The texture uvs tile and repeat
 * @property {number} MIRRORED_REPEAT - The texture uvs tile and repeat with mirroring
 */
var WRAP_MODES = exports.WRAP_MODES = {
  CLAMP: 0,
  REPEAT: 1,
  MIRRORED_REPEAT: 2
};

/**
 * The gc modes that are supported by pixi.
 *
 * The {@link PIXI.settings.GC_MODE} Garbage Collection mode for PixiJS textures is AUTO
 * If set to GC_MODE, the renderer will occasionally check textures usage. If they are not
 * used for a specified period of time they will be removed from the GPU. They will of course
 * be uploaded again when they are required. This is a silent behind the scenes process that
 * should ensure that the GPU does not  get filled up.
 *
 * Handy for mobile devices!
 * This property only affects WebGL.
 *
 * @static
 * @constant
 * @name GC_MODES
 * @memberof PIXI
 * @type {object}
 * @property {number} AUTO - Garbage collection will happen periodically automatically
 * @property {number} MANUAL - Garbage collection will need to be called manually
 */
var GC_MODES = exports.GC_MODES = {
  AUTO: 0,
  MANUAL: 1
};

/**
 * Regexp for image type by extension.
 *
 * @static
 * @constant
 * @memberof PIXI
 * @type {RegExp|string}
 * @example `image.png`
 */
var URL_FILE_EXTENSION = exports.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i;

/**
 * Regexp for data URI.
 * Based on: {@link https://github.com/ragingwind/data-uri-regex}
 *
 * @static
 * @constant
 * @name DATA_URI
 * @memberof PIXI
 * @type {RegExp|string}
 * @example data:image/png;base64
 */
var DATA_URI = exports.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;

/**
 * Regexp for SVG size.
 *
 * @static
 * @constant
 * @name SVG_SIZE
 * @memberof PIXI
 * @type {RegExp|string}
 * @example &lt;svg width="100" height="100"&gt;&lt;/svg&gt;
 */
var SVG_SIZE = exports.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i; // eslint-disable-line max-len

/**
 * Constants that identify shapes, mainly to prevent `instanceof` calls.
 *
 * @static
 * @constant
 * @name SHAPES
 * @memberof PIXI
 * @type {object}
 * @property {number} POLY Polygon
 * @property {number} RECT Rectangle
 * @property {number} CIRC Circle
 * @property {number} ELIP Ellipse
 * @property {number} RREC Rounded Rectangle
 */
var SHAPES = exports.SHAPES = {
  POLY: 0,
  RECT: 1,
  CIRC: 2,
  ELIP: 3,
  RREC: 4
};

/**
 * Constants that specify float precision in shaders.
 *
 * @static
 * @constant
 * @name PRECISION
 * @memberof PIXI
 * @type {object}
 * @property {string} LOW='lowp'
 * @property {string} MEDIUM='mediump'
 * @property {string} HIGH='highp'
 */
var PRECISION = exports.PRECISION = {
  LOW: 'lowp',
  MEDIUM: 'mediump',
  HIGH: 'highp'
};

/**
 * Constants that specify the transform type.
 *
 * @static
 * @constant
 * @name TRANSFORM_MODE
 * @memberof PIXI
 * @type {object}
 * @property {number} STATIC
 * @property {number} DYNAMIC
 */
var TRANSFORM_MODE = exports.TRANSFORM_MODE = {
  STATIC: 0,
  DYNAMIC: 1
};

/**
 * Constants that define the type of gradient on text.
 *
 * @static
 * @constant
 * @name TEXT_GRADIENT
 * @memberof PIXI
 * @type {object}
 * @property {number} LINEAR_VERTICAL Vertical gradient
 * @property {number} LINEAR_HORIZONTAL Linear gradient
 */
var TEXT_GRADIENT = exports.TEXT_GRADIENT = {
  LINEAR_VERTICAL: 0,
  LINEAR_HORIZONTAL: 1
};

/**
 * Represents the update priorities used by internal PIXI classes when registered with
 * the {@link PIXI.ticker.Ticker} object. Higher priority items are updated first and lower
 * priority items, such as render, should go later.
 *
 * @static
 * @constant
 * @name UPDATE_PRIORITY
 * @memberof PIXI
 * @type {object}
 * @property {number} INTERACTION=50 Highest priority, used for {@link PIXI.interaction.InteractionManager}
 * @property {number} HIGH=25 High priority updating, {@link PIXI.VideoBaseTexture} and {@link PIXI.extras.AnimatedSprite}
 * @property {number} NORMAL=0 Default priority for ticker events, see {@link PIXI.ticker.Ticker#add}.
 * @property {number} LOW=-25 Low priority used for {@link PIXI.Application} rendering.
 * @property {number} UTILITY=-50 Lowest priority used for {@link PIXI.prepare.BasePrepare} utility.
 */
var UPDATE_PRIORITY = exports.UPDATE_PRIORITY = {
  INTERACTION: 50,
  HIGH: 25,
  NORMAL: 0,
  LOW: -25,
  UTILITY: -50
};
//# sourceMappingURL=const.js.map
'use strict';

exports.__esModule = true;
exports.autoDetectRenderer = exports.Application = exports.Filter = exports.SpriteMaskFilter = exports.Quad = exports.RenderTarget = exports.ObjectRenderer = exports.WebGLManager = exports.Shader = exports.CanvasRenderTarget = exports.TextureUvs = exports.VideoBaseTexture = exports.BaseRenderTexture = exports.RenderTexture = exports.BaseTexture = exports.TextureMatrix = exports.Texture = exports.Spritesheet = exports.CanvasGraphicsRenderer = exports.GraphicsRenderer = exports.GraphicsData = exports.Graphics = exports.TextMetrics = exports.TextStyle = exports.Text = exports.SpriteRenderer = exports.CanvasTinter = exports.CanvasSpriteRenderer = exports.Sprite = exports.TransformBase = exports.TransformStatic = exports.Transform = exports.Container = exports.DisplayObject = exports.Bounds = exports.glCore = exports.WebGLRenderer = exports.CanvasRenderer = exports.ticker = exports.utils = exports.settings = undefined;

var _const = require('./const');

Object.keys(_const).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _const[key];
    }
  });
});

var _math = require('./math');

Object.keys(_math).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _math[key];
    }
  });
});

var _pixiGlCore = require('pixi-gl-core');

Object.defineProperty(exports, 'glCore', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pixiGlCore).default;
  }
});

var _Bounds = require('./display/Bounds');

Object.defineProperty(exports, 'Bounds', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Bounds).default;
  }
});

var _DisplayObject = require('./display/DisplayObject');

Object.defineProperty(exports, 'DisplayObject', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DisplayObject).default;
  }
});

var _Container = require('./display/Container');

Object.defineProperty(exports, 'Container', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Container).default;
  }
});

var _Transform = require('./display/Transform');

Object.defineProperty(exports, 'Transform', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Transform).default;
  }
});

var _TransformStatic = require('./display/TransformStatic');
