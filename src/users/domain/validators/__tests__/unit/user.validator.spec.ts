import {
  UserRules,
  UserValidator,
  UserValidatorFactory,
} from '../../user.validator';
import { UserDataBuilder } from '@/users/domain/testing/helpers/user-data-builder';

let sut: UserValidator;

describe('UserValidator user tests', () => {
  beforeEach(() => {
    sut = UserValidatorFactory.create();
  });

  it('Valid case for user validator class', () => {
    const props = UserDataBuilder({});
    const isValid = sut.validated(props);
    expect(isValid).toBeTruthy();
    expect(sut.validatedData).toStrictEqual(new UserRules(props));
  });
  describe('Name field', () => {
    it('Invalidations cases for name field.', () => {
      let isValid = sut.validated(null as any);
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual([
        'name should not be empty',
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validated({
        ...UserDataBuilder({}),
        name: '' as any,
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual(['name should not be empty']);

      isValid = sut.validated({
        ...UserDataBuilder({}),
        name: 10 as any,
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual([
        'name must be a string',
        'name must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validated({
        ...UserDataBuilder({}),
        name: 'x'.repeat(256),
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['name']).toStrictEqual([
        'name must be shorter than or equal to 255 characters',
      ]);
    });
  });

  describe('Email field', () => {
    it('Invalidations cases for email field.', () => {
      let isValid = sut.validated(null as any);
      expect(isValid).toBeFalsy();
      expect(sut.errors['email']).toStrictEqual([
        'email should not be empty',
        'email must be a string',
        'email must be an email',
        'email must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validated({
        ...UserDataBuilder({}),
        email: '' as any,
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['email']).toStrictEqual([
        'email should not be empty',
        'email must be an email',
      ]);

      isValid = sut.validated({
        ...UserDataBuilder({}),
        email: 10 as any,
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['email']).toStrictEqual([
        'email must be a string',
        'email must be an email',
        'email must be shorter than or equal to 255 characters',
      ]);

      isValid = sut.validated({
        ...UserDataBuilder({}),
        email: 'x'.repeat(256),
      });
      expect(isValid).toBeFalsy();
      expect(sut.errors['email']).toStrictEqual([
        'email must be an email',
        'email must be shorter than or equal to 255 characters',
      ]);
    });
  });
});
