/*
 * IPFS API Documentation
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.0.0
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi

type BitswapStats struct {
	Blocks Blocks `json:"blocks,omitempty"`
	Data Blocks `json:"data,omitempty"`
	ProvideBufferLength int32 `json:"provideBufferLength,omitempty"`
	Peers Peers `json:"peers,omitempty"`
	Wantlist Peers `json:"wantlist,omitempty"`
}