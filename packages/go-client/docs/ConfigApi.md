# \ConfigApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Get**](ConfigApi.md#Get) | **Get** /config | Returns the current config
[**Patch**](ConfigApi.md#Patch) | **Patch** /config | Replaces part of the current config
[**Replace**](ConfigApi.md#Replace) | **Put** /config | Replaces the current config
[**Reset**](ConfigApi.md#Reset) | **Delete** /config | Resets the current config to default values


# **Get**
> string Get(ctx, )
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

# **Patch**
> string Patch(ctx, optional)
Replaces part of the current config

The daemon will have to be restarted manually for the changes to take effect

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***PatchOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a PatchOpts struct

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

# **Replace**
> string Replace(ctx, optional)
Replaces the current config

The daemon will have to be restarted manually for the changes to take effect

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ReplaceOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ReplaceOpts struct

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

# **Reset**
> string Reset(ctx, )
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

