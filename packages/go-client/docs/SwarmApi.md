# \SwarmApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Addrs**](SwarmApi.md#Addrs) | **Get** /swarm/connections | List of known addresses of each peer connected
[**Addrs_0**](SwarmApi.md#Addrs_0) | **Post** /swarm/connections | Open a connection to a given address
[**Addrs_1**](SwarmApi.md#Addrs_1) | **Get** /swarm/peers | List out the peers that we have connections with
[**Addrs_2**](SwarmApi.md#Addrs_2) | **Delete** /swarm/connections/{address} | Close a connection to a given address
[**Dns**](SwarmApi.md#Dns) | **Post** /swarm/peers/{peerId}/ping | Send echo request packets to IPFS hosts
[**Info**](SwarmApi.md#Info) | **Get** /swarm/peer | Returns information about this peer


# **Addrs**
> string Addrs(ctx, )
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

# **Addrs_0**
> string Addrs_0(ctx, optional)
Open a connection to a given address

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***Addrs_1Opts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a Addrs_1Opts struct

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

# **Addrs_1**
> RemotePeers Addrs_1(ctx, )
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

# **Addrs_2**
> string Addrs_2(ctx, )
Close a connection to a given address

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

# **Dns**
> PingResponses Dns(ctx, peerId, optional)
Send echo request packets to IPFS hosts

Note that not all ping response objects are \"pongs\".<br/><br/>A \"pong\" message can be identified by a truthy success property and an empty text property.<br/><br/>Other ping responses are failures or status updates.

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **peerId** | **string**|  | 
 **optional** | ***DnsOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a DnsOpts struct

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

# **Info**
> Peer Info(ctx, )
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

