import { registerDecorator, ValidationOptions } from 'class-validator';
import { WHITE_SPACE_IS_NOT_ALLOWED_MSG } from '../constants/errorMessages.const';

export function IsNotWhiteSpace(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: { message: WHITE_SPACE_IS_NOT_ALLOWED_MSG },
      // options: validationOptions,
      // ? (validationOptions.message = WHITE_SPACE_IS_NOT_ALLOWED_MSG)
      // : { message: WHITE_SPACE_IS_NOT_ALLOWED_MSG },
      constraints: [],
      validator: {
        validate(value: any) {
          return (
            value === undefined || value.length === 0 || value.trim().length > 0
          );
        },
      },
    });
  };
}
