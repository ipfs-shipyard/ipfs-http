# \KeyApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**KeyGenerate**](KeyApi.md#KeyGenerate) | **Post** /key | Create a new keypair
[**KeyList**](KeyApi.md#KeyList) | **Get** /key | List all local keypairs
[**KeyRemove**](KeyApi.md#KeyRemove) | **Delete** /key/{name} | Remove a keypair
[**KeyRename**](KeyApi.md#KeyRename) | **Patch** /key/{name} | Rename a keypair


# **KeyGenerate**
> string KeyGenerate(ctx, optional)
Create a new keypair

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***KeyGenerateOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a KeyGenerateOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **generateKeypairPayload** | [**optional.Interface of GenerateKeypairPayload**](GenerateKeypairPayload.md)|  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **KeyList**
> string KeyList(ctx, )
List all local keypairs

### Required Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **KeyRemove**
> string KeyRemove(ctx, name)
Remove a keypair

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **name** | **string**|  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **KeyRename**
> string KeyRename(ctx, name, optional)
Rename a keypair

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **name** | **string**|  | 
 **optional** | ***KeyRenameOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a KeyRenameOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **renameKeypairPayload** | [**optional.Interface of RenameKeypairPayload**](RenameKeypairPayload.md)|  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

