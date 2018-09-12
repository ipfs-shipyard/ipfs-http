# \RepoApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**List**](RepoApi.md#List) | **Post** /repo/gc | Perform a garbage collection sweep on the repo
[**Stats**](RepoApi.md#Stats) | **Get** /repo | Get stats for the currently used repo


# **List**
> string List(ctx, )
Perform a garbage collection sweep on the repo

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

# **Stats**
> RepoStats Stats(ctx, )
Get stats for the currently used repo

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**RepoStats**](repo-stats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

