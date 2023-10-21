#!/bin/bash

# Demande du nom du fichier/component
read -p "Entrez le nom du fichier/component: " FILE_NAME

mkdir ${FILE_NAME}

cd ${FILE_NAME}

# Création du fichier .tsx
echo "import React from 'react';
import styled from 'styled-components';
import { ${FILE_NAME}BaseStyle } from './${FILE_NAME}.style';
import useScreenSize from '@/hooks/useScreenSize';

export interface ${FILE_NAME}Props {
  name: string;
}

const Container = styled.div<${FILE_NAME}Props>\`
  \${${FILE_NAME}BaseStyle}
\`;

const ${FILE_NAME}: React.FC<${FILE_NAME}Props> = ({ name }) => {

  const commonProps = {
    name,
  };


  const isLargerThanLaptop = useScreenSize('laptop');
  const isLargerThanTablet = useScreenSize('tablet');

  return (
    <Container {...commonProps}>
      {name}
    </Container>
  );
};

export default ${FILE_NAME};" > "${FILE_NAME}.tsx"

# Création du fichier .style.ts

echo "import { css } from 'styled-components';

import { ${FILE_NAME}Props } from './${FILE_NAME}';

export const ${FILE_NAME}BaseStyle = css<${FILE_NAME}Props>\`
\`" > "${FILE_NAME}.style.ts"

# Création du fichier .type.tsx
echo "export type ${FILE_NAME}Type = 'type1';" > "${FILE_NAME}.type.tsx"

echo "Fichiers créés avec succès!"
