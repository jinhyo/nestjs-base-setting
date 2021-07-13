import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LOGIN_IS_NEEDED_MSG } from 'src/constants/errorMessages.const';

@Injectable()
export class LoginGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(err, account, info) {
    if (err || !account) {
      throw err || new UnauthorizedException(LOGIN_IS_NEEDED_MSG);
    }
    return account;
  }
}
