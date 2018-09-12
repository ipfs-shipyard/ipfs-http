# \NameApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**NamePublish**](NameApi.md#NamePublish) | **Post** /name | Publish an IPNS name with a given value
[**NameResolve**](NameApi.md#NameResolve) | **Get** /name/{name} | Resolve an IPNS name


# **NamePublish**
> IpnsRecord NamePublish(ctx, optional)
Publish an IPNS name with a given value

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***NamePublishOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a NamePublishOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ipnsOptions** | [**optional.Interface of IpnsOptions**](IpnsOptions.md)|  | 

### Return type

[**IpnsRecord**](ipns-record.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **NameResolve**
> string NameResolve(ctx, name, optional)
Resolve an IPNS name

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **name** | **string**|  | 
 **optional** | ***NameResolveOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a NameResolveOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **recursive** | **optional.Bool**|  | [default to false]
 **nocache** | **optional.Bool**|  | [default to false]

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

