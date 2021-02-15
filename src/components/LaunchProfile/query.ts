import gql from 'graphql-tag';

export const QUERY_LAUNCH_PROFILE = gql `
query LaunchProfile ($id: String!) {
  launch(id:$id) {
    flight_number
    mission_name
    launch_year
    details
    launch_success
    launch_site {
      site_name
    }
    rocket {
      rocket_name
      rocket_type
    }
    links {
      flickr_images
    }
  }
}
`;