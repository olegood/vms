import BaseAPIService from "./BaseAPIService"

/**
 * Calls for build info.
 */
class BuildInfoService extends BaseAPIService {

    getBuildInfo() {
        return super.get('/api/build-info')
    }

}

export default new BuildInfoService()