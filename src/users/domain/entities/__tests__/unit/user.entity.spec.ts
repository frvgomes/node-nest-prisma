import { faker } from '@faker-js/faker';
import { UserEntity, UserProps } from '../../user.entity';

describe('UserEntity unit tests', () => {
  let props: UserProps;
  let userEntity: UserEntity;

  beforeEach(() => {
    props = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
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

  it('Getter of createdAt field', () => {
    expect(userEntity.props.createdAt).toBeDefined();
    expect(userEntity.props.createdAt).toBeInstanceOf(Date);
  });
});
