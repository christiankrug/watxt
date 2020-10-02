
export function getDevicePixelRatio(): number {
    let dpr = 1;
    if (!window) {
        return dpr;
    }
    if (!!window.devicePixelRatio) {
        dpr = window.devicePixelRatio;
    } else if (!!window.screen && !!(<any>window.screen).deviceXDPI && !!(<any>window.screen).logicalXDPI) {
        dpr = (<any>window.screen).deviceXDPI / (<any>window.screen).logicalXDPI;
    }
    return Math.round(Math.min(Math.max(dpr, 1), 2));
}

import { IParticleEffectAssetInstance } from '@gp/asset-loader';
import { MappedObject } from '../animator';
import { UnknownParticleError } from './unknownParticleError';

export interface IParticleEffectUpdater {
    addParticleEffect(id: string, particleEffect: IParticleEffectAssetInstance): void;
    updateParticleEffects(deltaT: number): void;
    getParticleEffect(id: string): IParticleEffectAssetInstance;
    removeParticleEffect(id: string): boolean;
}

export class ParticleEffectUpdater implements IParticleEffectUpdater {
    private particleEffects: MappedObject<IParticleEffectAssetInstance>;
    constructor() {
        this.particleEffects = {};
    }
    public addParticleEffect(id: string, particleEffect: IParticleEffectAssetInstance): void {
        if (this.particleEffects[id] !== undefined) {
            delete this.particleEffects[id];
        }
        this.particleEffects[id] = particleEffect;
    }

    public updateParticleEffects(deltaT: number): void {
        for (const key in this.particleEffects) {
            this.particleEffects[key].getEmitter().update(deltaT);
        }
    }

    public getParticleEffect(id: string): IParticleEffectAssetInstance {
        if (this.particleEffects[id] === undefined) {
            throw new UnknownParticleError(id);
        }
        return this.particleEffects[id];
    }

    public removeParticleEffect(id: string): boolean {
        if (id === undefined) {
            return false;
        }
        if (this.particleEffects[id] !== undefined) {
            delete this.particleEffects[id];
            return true;
        }
        return false;
    }
}


import { BaseError } from '@gp/utils/lib/errors';

export class UnknownParticleError extends BaseError {
    constructor(pName: string) {
        super('unknown particle: ' + pName + ' called.');
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var baseError_1 = require("./errors/baseError");
exports.BaseError = baseError_1.BaseError;
var invalidOperationError_1 = require("./errors/invalidOperationError");
exports.InvalidOperationError = invalidOperationError_1.InvalidOperationError;
var noReferenceError_1 = require("./errors/noReferenceError");
exports.NoReferenceError = noReferenceError_1.NoReferenceError;
var noValueError_1 = require("./errors/noValueError");
exports.NoValueError = noValueError_1.NoValueError;
//# sourceMappingURL=errors.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var baseError_1 = require("./baseError");
var InvalidOperationError = /** @class */ (function (_super) {
    tslib_1.__extends(InvalidOperationError, _super);
    function InvalidOperationError(message) {
        var _this = this;
        if (message) {
            _this = _super.call(this, "The following operation was not permitted: " + message) || this;
        }
        else {
            _this = _super.call(this, "An unpermitted operation was prevented.") || this;
        }
        return _this;
    }
    return InvalidOperationError;
}(baseError_1.BaseError));
exports.InvalidOperationError = InvalidOperationError;
//# sourceMappingURL=invalidOperationError.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var baseError_1 = require("./baseError");
var NoReferenceError = /** @class */ (function (_super) {
    tslib_1.__extends(NoReferenceError, _super);
    function NoReferenceError(message) {
        var _this = this;
        if (message) {
            _this = _super.call(this, "Operation could not continue due to an empty reference: " + message) || this;
        }
        else {
            _this = _super.call(this, "Operation could not continue due to an empty reference. Variable was null or undefined.") || this;
        }
        return _this;
    }
    return NoReferenceError;
}(baseError_1.BaseError));
exports.NoReferenceError = NoReferenceError;
//# sourceMappingURL=noReferenceError.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var baseError_1 = require("./baseError");
var NoValueError = /** @class */ (function (_super) {
    tslib_1.__extends(NoValueError, _super);
    function NoValueError(message) {
        var _this = this;
        if (message) {
            _this = _super.call(this, "Operation could not continue due to an empty value: " + message) || this;
        }
        else {
            _this = _super.call(this, "Operation could not continue due to an empty value. Variable was null or undefined.") || this;
        }
        return _this;
    }
    return NoValueError;
}(baseError_1.BaseError));
exports.NoValueError = NoValueError;
//# sourceMappingURL=noValueError.js.map
import { gameConstants } from '../state/gameConstants';
import { serviceStore } from '../store/serviceStore';

export function setAnimationData(): void {
    const assetLoader = serviceStore.getData('assetLoader');
    gameConstants.animationData = assetLoader.getDataAsset('animationData').getData();
}

