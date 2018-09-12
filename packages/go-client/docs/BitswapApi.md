# \BitswapApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**BitswapLedger**](BitswapApi.md#BitswapLedger) | **Get** /bitswap/ledger/{peerId} | Show the current ledger for a peer
[**BitswapReprovide**](BitswapApi.md#BitswapReprovide) | **Post** /bitswap/reprovide | Trigger reprovider
[**BitswapStats**](BitswapApi.md#BitswapStats) | **Get** /bitswap/stats | Show diagnostic information on the bitswap agent
[**BitswapUnwant**](BitswapApi.md#BitswapUnwant) | **Delete** /bitswap/wantlist/{cid} | Remove a given block from your wantlist
[**BitswapWantlist**](BitswapApi.md#BitswapWantlist) | **Get** /bitswap/wantlist | Show blocks currently on the wantlist


# **BitswapLedger**
> BitswapLedger BitswapLedger(ctx, peerId, optional)
Show the current ledger for a peer

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **peerId** | **string**|  | 
 **optional** | ***BitswapLedgerOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a BitswapLedgerOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cidBase** | **optional.String**| Which number base to use when returning a CID | [default to base32]
 **cidVersion** | **optional.Int32**| Which CID version to use | [default to 1]

### Return type

[**BitswapLedger**](bitswap-ledger.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BitswapReprovide**
> string BitswapReprovide(ctx, )
Trigger reprovider

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

# **BitswapStats**
> BitswapStats BitswapStats(ctx, optional)
Show diagnostic information on the bitswap agent

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***BitswapStatsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a BitswapStatsOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cidBase** | **optional.String**| Which number base to use when returning a CID | [default to base32]
 **cidVersion** | **optional.Int32**| Which CID version to use | [default to 1]

### Return type

[**BitswapStats**](bitswap-stats.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BitswapUnwant**
> BitswapUnwant(ctx, cid)
Remove a given block from your wantlist

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **cid** | **string**| The CID to remove from the wantlist | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **BitswapWantlist**
> Peers BitswapWantlist(ctx, optional)
Show blocks currently on the wantlist

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***BitswapWantlistOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a BitswapWantlistOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cidBase** | **optional.String**| Which number base to use when returning a CID | [default to base32]
 **cidVersion** | **optional.Int32**| Which CID version to use | [default to 1]
 **peerId** | **optional.String**| Filter the wantlist by this peer ID | 

### Return type

[**Peers**](peers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

