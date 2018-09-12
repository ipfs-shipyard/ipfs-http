# \NameApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Publish**](NameApi.md#Publish) | **Post** /name | Publish an IPNS name with a given value
[**Resolve**](NameApi.md#Resolve) | **Get** /name/{name} | Resolve an IPNS name


# **Publish**
> IpnsRecord Publish(ctx, optional)
Publish an IPNS name with a given value

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***PublishOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a PublishOpts struct

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

# **Resolve**
> string Resolve(ctx, name, optional)
Resolve an IPNS name

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **name** | **string**|  | 
 **optional** | ***ResolveOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ResolveOpts struct

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

