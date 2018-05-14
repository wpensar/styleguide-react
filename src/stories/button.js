import React from 'react';
import { storiesOf } from '@storybook/react';
import { checkA11y } from '@storybook/addon-a11y';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import centered from '@storybook/addon-centered';
import Button from '../components/buttons/button';
import ButtonPrimary from '../components/buttons/primary';
import LinkButton from '../components/buttons/link';
import SutilButton from '../components/buttons/sutil';
import DangerButton from '../components/buttons/danger';

storiesOf('Buttons', module)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .addDecorator(centered)
  .add('Default', () => (
    <Button
      text={text('Button text', 'Button')}
      handleClick={() => { }}
    />
  ))
  .add('Primary', () => (
    <ButtonPrimary
      text={text('Button text', 'Button')}
      handleClick={() => { }}
    />
  ))
  .add('Link', () => (
    <LinkButton
      text={text('Button text', 'Link')}
      handleClick={() => { }}
    />
  ))
  .add('Sutil', () => (
    <SutilButton
      text={text('Button text', 'Sutil')}
      handleClick={() => { }}
    />
  ))
  .add('Danger', () => (
    <DangerButton
      text={text('Button text', 'Danger')}
      handleClick={() => { }}
    />
  ));
