import ConfigInterface from '../../../Core/Contracts/ConfigInterface';
import BaseApplication from '../../../MiniApp/Application';
import ComponentApplication from '../../Application';
import { MiniAppConfig } from '../../../Types/global';
import Utils from './Utils';
declare class Application extends BaseApplication {
    protected componentApp: ComponentApplication;
    protected utils: Utils;
    constructor(config: ConfigInterface | MiniAppConfig, componentApp: ComponentApplication);
    getComponentApp(): ComponentApplication;
    setUtils(utils: Utils): void;
    getUtils(): Utils;
}
export = Application;
