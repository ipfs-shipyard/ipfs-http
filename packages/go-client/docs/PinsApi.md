# \PinsApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Add**](PinsApi.md#Add) | **Post** /pins | Remove a hash from the pinset
[**List**](PinsApi.md#List) | **Get** /pins | List all the objects pinned to local storage
[**Remove**](PinsApi.md#Remove) | **Delete** /pins/{hash} | Remove a hash from the pinset


# **Add**
> Add(ctx, optional)
Remove a hash from the pinset

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***AddOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a AddOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recursive** | **optional.Bool**|  | [default to true]
 **createPinPayload** | [**optional.Interface of CreatePinPayload**](CreatePinPayload.md)|  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **List**
> Pins List(ctx, optional)
List all the objects pinned to local storage

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***ListOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a ListOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type_** | **optional.String**|  | [default to all]
 **cid** | **optional.String**|  | 
 **cidBase** | **optional.String**| Which number base to use when returning a CID | [default to base32]
 **cidVersion** | **optional.Int32**| Which CID version to use | [default to 1]

### Return type

[**Pins**](pins.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Remove**
> Remove(ctx, hash, optional)
Remove a hash from the pinset

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **hash** | **string**|  | 
 **optional** | ***RemoveOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a RemoveOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **recursive** | **optional.Bool**|  | [default to true]

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

