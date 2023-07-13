import { StyledAboutImage } from './About.styles';
import myImg from '../../assets/images/my_pic.jpg';

function MyImage() {
  return (
    <StyledAboutImage
      width={250}
      src={myImg}
      alt="my picture"
      placeholder={
        <StyledAboutImage
          preview={false}
          src={myImg}
          alt="my picture"
          width={250}
        />
      }
    />
  );
}
export default MyImage;
