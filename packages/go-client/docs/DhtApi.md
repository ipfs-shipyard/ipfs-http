# \DhtApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DhtFindPeer**](DhtApi.md#DhtFindPeer) | **Get** /dht/peer/{peerId} | Retrieve the Peer Info of a reachable node in the network
[**DhtFindProviders**](DhtApi.md#DhtFindProviders) | **Get** /dht/providers/{cid} | Retrieve the providers for content that is addressed by an hash
[**DhtGet**](DhtApi.md#DhtGet) | **Get** /dht/{key} | Retrieve a value from the DHT
[**DhtProvide**](DhtApi.md#DhtProvide) | **Post** /dht/provide | Announce to the network that you are providing given values
[**DhtPut**](DhtApi.md#DhtPut) | **Post** /dht/{key} | Store a value on the DHT
[**DhtQuery**](DhtApi.md#DhtQuery) | **Get** /dht/query/{peerId} | Queries the network for the &#39;closest peers&#39; to a given key


# **DhtFindPeer**
> string DhtFindPeer(ctx, peerId)
Retrieve the Peer Info of a reachable node in the network

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **peerId** | **string**| The Peer ID that we wish to find info about | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DhtFindProviders**
> DhtFindProviders(ctx, cid, optional)
Retrieve the providers for content that is addressed by an hash

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **cid** | **string**| The content id that we wish to find providers for | 
 **optional** | ***DhtFindProvidersOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a DhtFindProvidersOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **timeout** | **optional.Int32**|  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DhtGet**
> string DhtGet(ctx, key)
Retrieve a value from the DHT

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **key** | **string**| The key to retrieve the associated value for | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DhtProvide**
> string DhtProvide(ctx, optional)
Announce to the network that you are providing given values

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***DhtProvideOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a DhtProvideOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recursive** | **optional.Bool**| Recursively provide the entire graph | [default to false]
 **requestBody** | [**optional.Interface of []string**](array.md)|  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DhtPut**
> string DhtPut(ctx, key, optional)
Store a value on the DHT

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **key** | **string**| The content id you are storing | 
 **optional** | ***DhtPutOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a DhtPutOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **dhtValue** | [**optional.Interface of DhtValue**](DhtValue.md)|  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **DhtQuery**
> string DhtQuery(ctx, peerId)
Queries the network for the 'closest peers' to a given key

'closest' is defined by the rules of the underlying Peer Routing mechanism

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **peerId** | **string**| An IPFS/libp2p peer ID | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

