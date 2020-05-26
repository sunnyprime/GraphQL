import React from 'react';
import {Query} from 'react-apollo'
import {gql} from 'apollo-boost'
import Spinner from './Spinner';
import CollectionData from './CollectionData';
// import CollectionsOverview from './collections-overview.component'

const GET_COLLECTIONS = gql`
{
    collections {
        id
        title
        items {
            id
            name
            price
            imageUrl
        }
    }
}
`

const CollectionsOverviewConatiner = () => (
    <Query query={GET_COLLECTIONS}>
        {({loading,error,data}) => {
            console.log({loading});
            console.log({error});
            console.log({data});
            if (loading) return <Spinner />
            return <CollectionData collections={data.collections} />
        }}
    </Query>
);

export default CollectionsOverviewConatiner