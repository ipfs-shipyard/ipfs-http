# \ConfigApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ConfigGet**](ConfigApi.md#ConfigGet) | **Get** /config | Returns the current config
[**ConfigPatch**](ConfigApi.md#ConfigPatch) | **Patch** /config | Replaces part of the current config
[**ConfigReplace**](ConfigApi.md#ConfigReplace) | **Put** /config | Replaces the current config
[**ConfigReset**](ConfigApi.md#ConfigReset) | **Delete** /config | Resets the current config to default values


# **ConfigGet**
> string ConfigGet(ctx, )
Returns the current config

### Required Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ConfigPatch**
> string ConfigPatch(ctx, optional)
Replaces part of the current config

The daemon will have to be restarted manually for the changes to take effect

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ConfigPatchOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ConfigPatchOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateConfigBody** | [**optional.Interface of UpdateConfigBody**](UpdateConfigBody.md)|  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ConfigReplace**
> string ConfigReplace(ctx, optional)
Replaces the current config

The daemon will have to be restarted manually for the changes to take effect

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ConfigReplaceOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ConfigReplaceOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **updateConfigBody** | [**optional.Interface of UpdateConfigBody**](UpdateConfigBody.md)|  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **ConfigReset**
> string ConfigReset(ctx, )
Resets the current config to default values

The daemon will have to be restarted manually for the changes to take effect

### Required Parameters
This endpoint does not need any parameter.

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

