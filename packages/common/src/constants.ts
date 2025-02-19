// Copyright 2020-2022 OnFinality Limited authors & contributors
// SPDX-License-Identifier: Apache-2.0

export const IPFS_DEV = 'https://interipfs.thechaindata.com';
export const IPFS_PROD = 'https://ipfs.subquery.network';
// CHANGE TO DEV ENVIRONMENT
// export const IPFS_NODE_ENDPOINT = `${IPFS_PROD}/ipfs/api/v0`;
export const IPFS_NODE_ENDPOINT = `${IPFS_DEV}/ipfs/api/v0`;
// export const IPFS_CLUSTER_ENDPOINT = `${IPFS_PROD}/cluster/add`;
export const IPFS_CLUSTER_ENDPOINT = `${IPFS_DEV}/cluster/add`;
export const IPFS_REGEX = /^ipfs:\/\//i;
