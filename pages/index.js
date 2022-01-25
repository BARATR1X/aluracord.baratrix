import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import appConfig from "../config.json";

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

function Title(props) {
  const Tag = props.tag || 'h1';
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals["100"]};
          font-size: 40px;
          font-weight: 700;
        }
      `}</style>
    </>
  );
}

function Title2(props1) {
  const Tag = props1.tag || 'h3';
  return (
    <>
      <Tag>{props1.children}</Tag>
      <style jsx>{`
        ${Tag} {
          color: ${appConfig.theme.colors.primary[100]};
          font-size: 20px;
          font-weight: 700;
          marginTop: 10px;
        }
      `}</style>
    </>
  );
}

// Componente React
//function HomePage() {
//JSX
//  return (
//  <div>
//   <GlobalStyle />
// <Title tag="h2">Boas vindas de volta!</Title>
//<h2>Discord - Alura Matrix</h2>
//</div>
// )

//}

//export default HomePage

export default function PaginaInicial() {
  const username = "Baratr1x";
  
  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.neutrals["100"],          
          backgroundImage:
            "url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}

        //borda de fora
> 
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "800px",
            borderRadius: "100px 1px",
            border: "2px solid",
            borderColor: appConfig.theme.colors.primary[100],
            padding: "50px",
            margin: "10px",
            boxShadow: "10px 3px 10px 0 rgb(10 10 10 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
            >
            <Title tag="h2">Chega no papo !</Title>
            <Text
              variant="body3"
              styleSheet={{   
                marginTop: "10px",             
                marginBottom: "-10px",
                color: appConfig.theme.colors.primary[100],
              }}
          >
            </Text>
          
            <Title2 tag="h3">Aluracord - Baratrix (bara)</Title2>
            <Text
              variant="body3"
              styleSheet={{                              
                marginBottom: "32px",
                color: appConfig.theme.colors.primary[100],
              }}
            >              
            </Text>
             
            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[100], //cor do texto
                  mainColor: appConfig.theme.colors.neutrals[100], //cor da borda
                  mainColorHighlight: appConfig.theme.colors.primary[100], //cor da borda com hover
                  backgroundColor: appConfig.theme.colors.neutrals[800], // cor do fundo do formulario
                },
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{                
                contrastColor: appConfig.theme.colors.neutrals["900"], // cor da letra                             
                mainColor: appConfig.theme.colors.primary[100], // cor background fundo                
                mainColorStrong: appConfig.theme.colors.neutrals[100], // cor background fundo hover
                borderRadius: "10px",
                border: "1px solid",
                borderColor: appConfig.theme.colors.neutrals[100],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[900],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[100],
              borderRadius: "100px 1px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                border: "3px solid" ,
                borderColor: appConfig.theme.colors.primary[100],
                borderRadius: "50%",
                marginBottom: "16px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body2"
              styleSheet={{
                color: appConfig.theme.colors.primary[100],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: "3px 10px",
                borderRadius: "1000px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
