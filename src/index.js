import AppService from './modules/app.service'
import {config} from './modules/config'
import './modules/header.components'

console.log('Config key:', config.key);

const service = new AppService('Hello world');
service.log()