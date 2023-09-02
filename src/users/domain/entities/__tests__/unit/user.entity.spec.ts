import { UserEntity, UserProps } from '../../user.entity';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let userEntity: UserEntity;

  beforeEach(() => {
    props = UserDataBuilder({});
    userEntity = new UserEntity(props);
  });

  it('Constructor Method', () => {
    expect(userEntity.props.name).toEqual(props.name);
    expect(userEntity.props.email).toEqual(props.email);
    expect(userEntity.props.password).toEqual(props.password);
    expect(userEntity.props.createdAt).toBeInstanceOf(Date);
  });

  it('Getter of name field', () => {
    expect(userEntity.props.name).toBeDefined();
    expect(userEntity.props.name).toEqual(props.name);
    expect(typeof userEntity.props.name).toEqual('string');
  });
  it('Setter of name field', () => {
    userEntity['name'] = 'other name';
    expect(userEntity.props.name).toEqual('other name');
    expect(typeof userEntity.props.name).toEqual('string');
  });

  it('Getter of email field', () => {
    expect(userEntity.props.email).toBeDefined();
    expect(userEntity.props.email).toEqual(props.email);
    expect(typeof userEntity.props.email).toEqual('string');
  });

  it('Getter of password field', () => {
    expect(userEntity.props.password).toBeDefined();
    expect(userEntity.props.password).toEqual(props.password);
    expect(typeof userEntity.props.password).toEqual('string');
  });
  it('Setter of password field', () => {
    userEntity['password'] = 'other password';
    expect(userEntity.props.password).toEqual('other password');
    expect(typeof userEntity.props.password).toEqual('string');
  });

  it('Getter of createdAt field', () => {
    expect(userEntity.props.createdAt).toBeDefined();
    expect(userEntity.props.createdAt).toBeInstanceOf(Date);
  });

  it('Should update a user', () => {
    userEntity.update('other name');
    expect(userEntity.props.name).toEqual('other name');
  });

  it('Should update a password field', () => {
    userEntity.updatePassword('other password');
    expect(userEntity.props.password).toEqual('other password');
  });
});
