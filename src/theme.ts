import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: ` -apple-system, BlinkMacSystemFont`,
    heading: ` -apple-system, BlinkMacSystemFont`,
    fontDisplay: 'optional',
    webkitFontSmoothing: 'antialiased'
  },

  colors: {
    blue: {
      50: '#1877F2'
    },
    pink: {
      50: '#F7B0E0',
      100: '#FF75B6',
      200: '#FF5EFF'
    },
    yellow: {
      50: '#FFCABA',
      100: '#FFCD1A'
    },
    green: {
      100: '#00CC68'
    },
    orange: {
      50: '#FC961E',
      100: '#FF5500'
    },
    purple: {
      50: '#BB9CFC',
      100: '#611BF7'
    },
    dark: {
      100: '#000000'
    },
    gray: {
      '50': 'rgba(255, 255, 255, 16%)',
      '100': 'rgba(255, 255, 255, 8%)',
      '200': 'rgba(255, 255, 255, 4%)',
      '300': 'rgba(255, 255, 255, 2%)',
      '400': 'rgba(255, 255, 255, 1%)'
    },
    primary: {
      '50': '#5C7CFF',
      '100': '#FFAEE1'
    },
    secondary: {
      '50': '#0D0D0D',
      '100': '#050505'
    },
    text: {
      '50': '#BDC1C6'
    },
    accent: {
      '50': '#FFFFFF',
      '100': '#BDC1C6',
      '200': '#DBE0E7'
    },
    gradient: {
      '50': 'linear-gradient(94.04deg, #8099FF -5.67%, #FFAEE1 63.68%, #FF99A6 145.64%)',
      '100':
        'linear-gradient(0deg, rgba(5, 5, 5, 0.08), rgba(5, 5, 5, 0.08)), linear-gradient(94.04deg, #FFAEE1 -5.67%, #8099FF 47.06%)'
    }
  },

  // styles: {
  //   global: {
  //     body: {
  //       bgColor: '#000000',
  //       webkitFontSmoothing: 'antialiased',
  //       overflowX: 'hidden',
  //       transition: 'all .1s ease-out'
  //     }
  //   }
  // },

  components: {
    Text: {
      baseStyle: {
        // opacity: 0.87
        // letterSpacing: 0.15
      }
    },
    Link: {
      baseStyle: {
        borderBottom: 'none',
        _hover: {
          textDecoration: 'none',
          transform: 'scale(1.01)'
        },
        _focus: {
          boxShadow: 'none !important'
        }
      }
    },

    Button: {
      variants: {
        primary: {
          backgroundColor: '#FFFFFF',
          color: '#000000',
          rounded: 'full',
          fontSize: '15px',
          _hover: {
            transform: 'scale(1)',
            opacity: 0.87
          }
        },

        outline: {
          border: '1px solid',
          borderColor: 'rgba(0, 0, 0, 24%)',
          rounded: 'full',
          transition: 'all .3s ease-out',
          _hover: {
            transform: 'scale(1.01)',
            opacity: 0.87,
            bgColor: 'dark.100',
            color: '#FFFFFF'
          },
          _focus: {
            outline: 'none',
            boxShadow: 'none',
            border: '1px solid',
            borderColor: 'rgba(0, 0, 0, 24%)'
          },
          _selected: { bgColor: 'dark.100', color: '#FFFFFF' }
        },

        accent: {
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          color: '#FFFFFF',
          rounded: 'full',
          fontFamily: "'SF Pro Text', '-apple-system'",
          fontSize: '16px',
          fontWeight: '500',
          _hover: {
            transform: 'scale(1.01)'
          }
        }
      }
    },

    Input: {
      variants: {
        solid: {
          field: {
            rounded: 'full',
            border: 'none',
            // borderColor: 'rgba(255, 255, 255, 24%)',

            _placeholder: {
              color: '#0D0D0D',
              opacity: 0.5
            },
            _hover: {
              bgColor: '#FFFFFF'
            },
            _focus: {
              borderColor: '#fff',
              outline: 'none',
              boxShadow: 'none'
            }
            // _selected: { bgColor: 'transparent' }
          }
        },

        flushed: {
          field: {
            border: '1px solid',
            borderColor: 'red',
            _hover: {
              borderColor: 'rgb(255, 255, 255, 60%)'
            },

            _placeholder: {
              color: 'rgb(255, 255, 255, 12%)'
            },

            _focus: {
              borderColor: 'rgb(255, 255, 255, 60%)',
              outline: 'none',
              boxShadow: 'none'
            }
          }
        }
      }
    }
  }
})

export default theme
