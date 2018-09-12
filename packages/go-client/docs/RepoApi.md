# \RepoApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RepoGc**](RepoApi.md#RepoGc) | **Post** /repo/gc | Perform a garbage collection sweep on the repo
[**RepoStats**](RepoApi.md#RepoStats) | **Get** /repo | Get stats for the currently used repo


# **RepoGc**
> string RepoGc(ctx, )
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

# **RepoStats**
> RepoStats RepoStats(ctx, )
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

