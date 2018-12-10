import styled from 'styled-components';

import profile from '../images/profile.jpg';

const Profile = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${profile});
  background-size: cover;
  position: absolute;
  top: 50px;
  right: 50px;
`;

export default Profile;
