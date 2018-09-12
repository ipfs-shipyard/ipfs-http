# \FilesApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteFilesPath**](FilesApi.md#DeleteFilesPath) | **Delete** /files/{path} | Remove an MFS path
[**GetFilesPath**](FilesApi.md#GetFilesPath) | **Get** /files/{path} | Get a file or directory from your MFS
[**PatchFilesPath**](FilesApi.md#PatchFilesPath) | **Patch** /files/{path} | Update an MFS path
[**PostFilesPath**](FilesApi.md#PostFilesPath) | **Post** /files/{path} | Create an MFS path
[**PutFilesPath**](FilesApi.md#PutFilesPath) | **Put** /files/{path} | Update an MFS path


# **DeleteFilesPath**
> DeleteFilesPath(ctx, path, optional)
Remove an MFS path

Removes a directory or file from your MFS

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **path** | **string**| The MFS path you wish to remove | 
 **optional** | ***DeleteFilesPathOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a DeleteFilesPathOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **recursive** | **optional.Bool**| Remove directories recursively | [default to false]

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **GetFilesPath**
> UnixfsEntry GetFilesPath(ctx, path, optional)
Get a file or directory from your MFS

Returns a file or directory from your MFS<br/><br/>Specify `accept: application/json` for file/directory metadata or `accept: application/octet-stream` to download file data.<br/><br/>If the path resolves to a file and `accept: application/octet-stream` has been specified, you may pass the `offset` and `length` parameters.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **path** | **string**| The MFS path you wish to retrieve | [default to /]
 **optional** | ***GetFilesPathOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GetFilesPathOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int32**| Return file data starting at this offset | 
 **length** | **optional.Int32**| Return only this many bytes of file data | 
 **cidBase** | **optional.String**| Which number base to use when returning a CID | [default to base32]
 **cidVersion** | **optional.Int32**| Which CID version to use | [default to 1]

### Return type

[**UnixfsEntry**](unixfs-entry.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/octet-stream

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **PatchFilesPath**
> PatchFilesPath(ctx, path, optional)
Update an MFS path

Updates a file or directory at the passed MFS path

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **path** | **string**| The MFS path you wish to update | 
 **optional** | ***PatchFilesPathOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a PatchFilesPathOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int32**| Byte offset to begin writing at | [default to 0]
 **parents** | **optional.Bool**| Make parent directories as needed | [default to false]
 **truncate** | **optional.Bool**| Truncate the file to size zero before writing | [default to true]
 **length** | **optional.Int32**| Maximum number of bytes to write | 
 **rawLeaves** | **optional.Bool**| Use raw blocks for newly created leaf nodes | [default to false]
 **hashAlg** | **optional.String**|  | [default to sha2-256]
 **cidVersion** | **optional.Int32**| Which CID version to use | [default to 1]
 **flush** | **optional.Bool**| Flush the changes to disk immediately | [default to true]
 **uNKNOWNBASETYPE** | [**optional.Interface of UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream, multipart/form-data
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **PostFilesPath**
> PostFilesPath(ctx, path, optional)
Create an MFS path

Create a new file or directory at the passed MFS path

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **path** | **string**| The MFS path you wish to create | 
 **optional** | ***PostFilesPathOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a PostFilesPathOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **offset** | **optional.Int32**| Byte offset to begin writing at | [default to 0]
 **parents** | **optional.Bool**| Make parent directories as needed | [default to false]
 **length** | **optional.Int32**| Maximum number of bytes to write | 
 **rawLeaves** | **optional.Bool**| Use raw blocks for newly created leaf nodes | [default to false]
 **hashAlg** | **optional.String**|  | [default to sha2-256]
 **cidVersion** | **optional.Int32**| Which CID version to use | [default to 1]
 **flush** | **optional.Bool**| Flush the changes to disk immediately | [default to true]
 **uNKNOWNBASETYPE** | [**optional.Interface of UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream, multipart/form-data
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **PutFilesPath**
> PutFilesPath(ctx, path, optional)
Update an MFS path

Updates a file or directory at the passed MFS path

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **path** | **string**| The MFS path you wish to update | 
 **optional** | ***PutFilesPathOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a PutFilesPathOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **parents** | **optional.Bool**| Make parent directories as needed | [default to false]
 **rawLeaves** | **optional.Bool**| Use raw blocks for newly created leaf nodes | [default to false]
 **hashAlg** | **optional.String**|  | [default to sha2-256]
 **cidVersion** | **optional.Int32**| Which CID version to use | [default to 1]
 **flush** | **optional.Bool**| Flush the changes to disk immediately | [default to true]
 **uNKNOWNBASETYPE** | [**optional.Interface of UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream, multipart/form-data
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

