import {
    AuthToken,
    AuthClientTwoLegged,
    AuthClientThreeLegged,
    AuthClientTwoLeggedV2,
    AuthClientThreeLeggedV2,
    BucketsApi,
    DerivativesApi,
    FoldersApi,
    HubsApi,
    ItemsApi,
    ObjectsApi,
    ProjectsApi,
    UserProfileApi,
    VersionsApi,
} from 'forge-apis';

const authToken: AuthToken = {
    access_token: '',
    expires_in: 0,
    token_type: '',
    refresh_token: '',
};

// $ExpectType AuthClientTwoLegged
const authClientTwoLegged = new AuthClientTwoLegged('', '', [], true);
// $ExpectType Promise<AuthToken>
authClientTwoLegged.authenticate();
// $ExpectType AuthToken
authClientTwoLegged.getCredentials();
// $ExpectType void
authClientTwoLegged.setCredentials(authToken);
// $ExpectType boolean
authClientTwoLegged.isAuthorized();

// $ExpectType AuthClientThreeLegged
const authClientThreeLegged = new AuthClientThreeLegged('', '', '', [], true);
// $ExpectType string
authClientThreeLegged.generateAuthUrl('');
// $ExpectType Promise<AuthToken>
authClientThreeLegged.getToken('');
// $ExpectType Promise<AuthToken>
authClientThreeLegged.refreshToken(authToken);


// $ExpectType AuthClientTwoLeggedV2
const authClientTwoLeggedV2 = new AuthClientTwoLeggedV2('', '', [], true);
// $ExpectType Promise<AuthToken>
authClientTwoLeggedV2.authenticate();
// $ExpectType AuthToken
authClientTwoLeggedV2.getCredentials();
// $ExpectType void
authClientTwoLeggedV2.setCredentials(authToken);
// $ExpectType boolean
authClientTwoLeggedV2.isAuthorized();

// $ExpectType AuthClientThreeLeggedV2
const authClientThreeLeggedV2 = new AuthClientThreeLeggedV2('', '', '', [], true);
// $ExpectType string
authClientThreeLeggedV2.generateAuthUrl('');
// $ExpectType Promise<AuthToken>
authClientThreeLeggedV2.getToken('');
// $ExpectType Promise<AuthToken>
authClientThreeLeggedV2.refreshToken(authToken);

// $ExpectType BucketsApi
const bucketsApi = new BucketsApi();

// $ExpectType Promise<ApiResponse>
bucketsApi.createBucket(
    {
        bucketKey: '',
        policyKey: 'transient',
    },
    {},
    authClientTwoLegged,
    authToken,
);
// $ExpectType Promise<ApiResponse>
bucketsApi.deleteBucket('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
bucketsApi.getBucketDetails('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
bucketsApi.getBuckets({}, authClientTwoLegged, authToken);

// $ExpectType DerivativesApi
const derivativesApi = new DerivativesApi();
// $ExpectType Promise<ApiResponse>
derivativesApi.deleteManifest('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getDerivativeManifest('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getFormats({}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getManifest('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getMetadata('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getModelviewMetadata('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getModelviewProperties('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.getThumbnail('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
derivativesApi.translate(
    {
        input: {
            urn: '',
            compressedUrn: true,
            rootFilename: '',
        },
        output: {
            formats: [
                {
                    type: 'svf',
                    views: ['2d'],
                    advanced: {
                        exportFileStructure: 'single',
                        modelGuid: '',
                        objectIds: [''],
                    },
                },
            ],
        },
        misc: {
            workflow: 'my-workflow-id',
            workflowAttributes: {
                attribute1: 'attribute1',
                attribute2: 2,
                attribute3: [3],
            },
        },
    },
    {},
    authClientTwoLegged,
    authToken,
);

// $ExpectType FoldersApi
const foldersApi = new FoldersApi();
// $ExpectType Promise<ApiResponse>
foldersApi.getFolder('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
foldersApi.getFolderContents('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
foldersApi.getFolderParent('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
foldersApi.getFolderRefs('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
foldersApi.getFolderRelationshipsRefs('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
foldersApi.postFolder('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
foldersApi.postFolderRelationshipsRef('', '', {}, authClientTwoLegged, authToken);

// $ExpectType HubsApi
const hubsApi = new HubsApi();
// $ExpectType Promise<ApiResponse>
hubsApi.getHub('', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
hubsApi.getHubs({}, authClientTwoLegged, authToken);

// $ExpectType ItemsApi
const itemsApi = new ItemsApi();
// $ExpectType Promise<ApiResponse>
itemsApi.getItem('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.getItemParentFolder('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.getItemRefs('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.getItemRelationshipsRefs('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.getItemTip('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.getItemVersions('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.postItem('', { included: [{ type: '', id: '' }] }, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
itemsApi.postItemRelationshipsRef('', '', {}, authClientTwoLegged, authToken);

// $ExpectType ObjectsApi
const objectsApi = new ObjectsApi();
// $ExpectType Promise<ApiResponse>
objectsApi.copyTo('', '', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.createSignedResource('', '', { minutesExpiration: 0 }, {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.deleteObject('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.deleteSignedResource('', '');
// $ExpectType Promise<ApiResponse>
objectsApi.getObjectDetails('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.getObject('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.getObjects('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.getSignedResource('', {});
// $ExpectType Promise<ApiResponse>
objectsApi.getStatusBySessionId('', '', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.uploadChunk('', '', 0, '', '', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.uploadObject('', '', 0, '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
objectsApi.uploadSignedResource('', 0, '', {});
// $ExpectType Promise<ApiResponse>
objectsApi.uploadSignedResourcesChunk('', 0, '', '', {});
objectsApi.uploadResources('', [{ objectKey: '', data: '' }], {}, authClientTwoLegged, authToken);
objectsApi.downloadResources('', [], {}, authClientTwoLegged, authToken);
objectsApi.getS3UploadURL('', '', {}, authClientTwoLegged, authToken);
objectsApi.getS3UploadURLs('', { requests: [{ objectKey: '' }] }, {}, authClientTwoLegged, authToken);
objectsApi.completeS3Upload('', '', {}, {}, authClientTwoLegged, authToken);
objectsApi.completeS3Uploads('', { requests: [{ objectKey: '' }] }, authClientTwoLegged, authToken);
objectsApi.getS3DownloadURL('', '', {}, authClientTwoLegged, authToken);
objectsApi.getS3DownloadURLs('', { requests: [{ objectKey: '' }] }, {}, authClientTwoLegged, authToken);

// $ExpectType ProjectsApi
const projectsApi = new ProjectsApi();
// $ExpectType Promise<ApiResponse>
projectsApi.getHubProjects('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
projectsApi.getProject('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
projectsApi.getProjectHub('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
projectsApi.getProjectTopFolders('', '', authClientTwoLegged, authToken);

// $ExpectType Promise<ApiResponse>
projectsApi.postStorage('', {
    jsonapi: {
        version: '1.0'
    },
    data: {
        type: 'objects',
        attributes: {
            name: '{{Filename}}'
        },
        relationships: {
            target: {
                data: {
                    type: 'folders',
                    id: '{{FolderId}}'
                }
            }
        }
    }
}, authClientTwoLegged, authToken);

// $ExpectType UserProfileApi
const userProfileApi = new UserProfileApi();
// $ExpectType Promise<ApiResponse>
userProfileApi.getUserProfile(authClientTwoLegged, authToken);

// $ExpectType VersionsApi
const versionsApi = new VersionsApi();
// $ExpectType Promise<ApiResponse>
versionsApi.getVersion('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
versionsApi.getVersionItem('', '', authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
versionsApi.getVersionRefs('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
versionsApi.getVersionRelationshipsRefs('', '', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
versionsApi.postVersion('', {}, authClientTwoLegged, authToken);
// $ExpectType Promise<ApiResponse>
versionsApi.postVersion('', {}, authClientTwoLegged, authToken);
