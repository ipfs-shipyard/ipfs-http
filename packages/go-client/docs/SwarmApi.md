# \SwarmApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SwarmAddrs**](SwarmApi.md#SwarmAddrs) | **Get** /swarm/connections | List of known addresses of each peer connected
[**SwarmConnect**](SwarmApi.md#SwarmConnect) | **Post** /swarm/connections | Open a connection to a given address
[**SwarmDisconnect**](SwarmApi.md#SwarmDisconnect) | **Delete** /swarm/connections/{address} | Close a connection to a given address
[**SwarmInfo**](SwarmApi.md#SwarmInfo) | **Get** /swarm/peer | Returns information about this peer
[**SwarmPeers**](SwarmApi.md#SwarmPeers) | **Get** /swarm/peers | List out the peers that we have connections with
[**SwarmPing**](SwarmApi.md#SwarmPing) | **Post** /swarm/peers/{peerId}/ping | Send echo request packets to IPFS hosts


# **SwarmAddrs**
> string SwarmAddrs(ctx, )
List of known addresses of each peer connected

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

# **SwarmConnect**
> string SwarmConnect(ctx, optional)
Open a connection to a given address

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***SwarmConnectOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SwarmConnectOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **swamConnectToPeerPayload** | [**optional.Interface of SwamConnectToPeerPayload**](SwamConnectToPeerPayload.md)|  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SwarmDisconnect**
> string SwarmDisconnect(ctx, address)
Close a connection to a given address

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **address** | **string**| The address of the peer to disconnect from | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SwarmInfo**
> Peer SwarmInfo(ctx, )
Returns information about this peer

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**Peer**](peer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SwarmPeers**
> RemotePeers SwarmPeers(ctx, )
List out the peers that we have connections with

### Required Parameters
This endpoint does not need any parameter.

### Return type

[**RemotePeers**](remote-peers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **SwarmPing**
> PingResponses SwarmPing(ctx, peerId, optional)
Send echo request packets to IPFS hosts

Note that not all ping response objects are \"pongs\".<br/><br/>A \"pong\" message can be identified by a truthy success property and an empty text property.<br/><br/>Other ping responses are failures or status updates.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **peerId** | **string**|  | 
 **optional** | ***SwarmPingOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a SwarmPingOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **pingPeerPayload** | [**optional.Interface of PingPeerPayload**](PingPeerPayload.md)|  | 

### Return type

[**PingResponses**](ping-responses.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

