/* eslint-disable prettier/prettier */
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Dispatch, SetStateAction, useState } from 'react';
import handleError from '@/utils/handleToast';
import Input from '@/components/Inputs/Input/Input';
import { Flex } from '@/styles/global';
import { maskPhone } from '@/utils/masks';
import Checkbox from '@/components/Inputs/Checkbox/Checkbox';
import { IRegisterForm, RegisterSchema } from '@/validations/RegisterSchema';
import {
  Container,
  FormContainer,
  LinkText,
  SubmitButton,
  StyledLink,
  Strong
} from './styles';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit: SubmitHandler<IRegisterForm> = async () => {
    try {
      setIsSubmitting(true);
    } catch (error) {
      handleError(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <Flex $direction="column" $gap="1.15rem">
            <Input
              id="name"
              autoComplete="name"
              label="Nome completo"
              placeholder="Insira seu nome completo"
              {...register('name')}
              error={errors?.name?.message}
            />

            <Input
              id="phone"
              autoComplete="tel-national"
              label="Telefone"
              maskFunction={maskPhone}
              minLength={14}
              maxLength={15}
              placeholder="(00) 00000-0000"
              {...register('phone')}
              error={errors?.phone?.message}
            />

            <Input
              id="email"
              autoComplete="email"
              type="email"
              label="E-mail"
              placeholder="Insira o e-mail"
              {...register('email')}
              error={errors?.email?.message}
            />

            <Input
              id="password"
              label="Senha"
              type="password"
              placeholder="Insira a senha"
              {...register('password')}
              error={errors?.password?.message}
            />

            <Input
              id="confirm_password"
              label="Confirmar senha"
              type="password"
              placeholder="Confirme a senha"
              {...register('confirm_password')}
              error={errors?.confirm_password?.message}
            />

            <Checkbox
              id="terms"
              {...register('terms')}
              label={(
                <LinkText>
                  Li e concordo com os{' '}
                  <Strong onClick={() => useRouter().push('/login')}>Termos de uso</Strong>
                </LinkText>
              )}
            />
            {errors?.terms && (
              <p style={{ color: '#DE3737', fontSize: '8pt' }}>
                {errors.terms.message}
              </p>
            )}
            <Checkbox
              id="privacy"
              {...register('privacy')}
              label={(
                <LinkText>
                  Li e concordo com a{' '}
                  <Strong onClick={() => useRouter().push('/login')}>
                    Política de privacidade
                  </Strong>
                </LinkText>
              )}
            />
            {errors?.privacy && (
              <p style={{ color: '#DE3737', fontSize: '8pt' }}>
                {errors.privacy.message}
              </p>
            )}
        </Flex>

        <Flex $direction="column" $gap="1.25rem" $align="center">
          <SubmitButton type="submit" disabled={isSubmitting}>
            Cadastrar
          </SubmitButton>


        </Flex>
      </FormContainer>
    </Container>
  );
};

export default RegisterForm;
