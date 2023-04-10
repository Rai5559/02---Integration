//import all from "./About.Styles.js"
import { AboutContainer, AboutImg, AboutContent, Title, Subtitle, Text } from "./AboutStyles.js";


export default function About (){
     return (
        <AboutContainer>
      <AboutImg src="https://static.wikia.nocookie.net/f5bef280-f4ab-42a1-b7fe-378c176a4da1/scale-to-width-down/800" alt="Profile picture" />
      <AboutContent>
        <Title>About Me</Title>
        <Subtitle>Hi, I'm Yael Romero</Subtitle>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed est vel velit tempor suscipit. Integer maximus, nisl vel porttitor elementum, odio ex tincidunt nulla, vel eleifend turpis turpis vel eros. Nullam facilisis metus eu tortor tristique, vitae tincidunt dolor iaculis. Duis tempus dolor ac mauris auctor, sit amet suscipit nisi sodales. Nulla at elementum turpis. Nunc hendrerit purus sit amet purus egestas, nec malesuada turpis facilisis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Fusce congue tincidunt elit, a posuere nibh aliquam ut.
        </Text>
        <Text>
          Duis ullamcorper finibus magna, a malesuada mauris ullamcorper at. Proin fringilla urna a dui pretium, eu faucibus metus suscipit. In hac habitasse platea dictumst. Aenean ut congue nibh. Fusce volutpat sapien sed magna varius, nec imperdiet mauris volutpat. Donec id nisl id odio gravida dapibus. Proin quis ex nec sapien venenatis egestas. Donec quis tortor mi. Fusce vel mauris auctor, rhoncus velit eget, interdum lectus.
        </Text>
      </AboutContent>
    </AboutContainer>
     )
};