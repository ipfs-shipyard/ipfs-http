# \DagApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**Create**](DagApi.md#Create) | **Post** /dag | Store an IPLD format node
[**Get**](DagApi.md#Get) | **Get** /dag/{cid} | Get a DAG node
[**Remove**](DagApi.md#Remove) | **Delete** /dag/{cid} | Remove a DAG node from your local repo
[**Update**](DagApi.md#Update) | **Patch** /dag/{cid} | Update an IPLD format node


# **Create**
> string Create(ctx, optional)
Store an IPLD format node

The dag API supports the creation and manipulation of dag-pb object, as well as other IPLD formats (i.e dag-cbor, ethereum-block, git, etc)

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
 **optional** | ***CreateOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a CreateOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **format** | **optional.String**|  | [default to dag-cbor]
 **hashAlg** | **optional.String**|  | [default to sha2-256]
 **cidVersion** | **optional.Int32**| Which CID version to use | [default to 1]
 **dagNode** | [**optional.Interface of DagNode**](DagNode.md)|  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Get**
> string Get(ctx, cid, optional)
Get a DAG node

Resolves a DAG node with the passed CID

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **cid** | **string**| The CID that corresponds to the DAG node we wish to retrieve | 
 **optional** | ***GetOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a GetOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **cidBase** | **optional.String**| Which number base to use when returning a CID | [default to base32]
 **cidVersion** | **optional.Int32**| Which CID version to use | [default to 1]
 **path** | **optional.String**| Path to resolve within this DAGNode | 
 **offset** | **optional.Int32**| Byte offset to start streaming from | 
 **length** | **optional.Int32**| Max number of bytes to stream | 
 **localResolve** | **optional.Bool**| If set to true, it will avoid resolving through different objects | [default to false]

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/octet-stream, */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Remove**
> string Remove(ctx, cid)
Remove a DAG node from your local repo

This will not remove a DAG node from IPFS if other nodes have it

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **cid** | **string**| The CID that corresponds to the DAG node we wish to remove | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **Update**
> string Update(ctx, cid, optional)
Update an IPLD format node

This will result in a new DAG node being created

### Required Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
  **cid** | **string**| The CID that corresponds to the DAG node we wish to create | 
 **optional** | ***UpdateOpts** | optional parameters | nil if no parameters

### Optional Parameters
Optional parameters are passed through a pointer to a UpdateOpts struct

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **format** | **optional.String**|  | [default to dag-cbor]
 **hashAlg** | **optional.String**|  | [default to sha2-256]
 **cidVersion** | **optional.Int32**| Which CID version to use | [default to 1]
 **dagNode** | [**optional.Interface of DagNode**](DagNode.md)|  | 

### Return type

**string**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

