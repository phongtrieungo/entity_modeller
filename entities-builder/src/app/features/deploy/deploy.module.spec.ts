import { DeployModule } from './deploy.module';

describe('DeployModule', () => {
  let deployModule: DeployModule;

  beforeEach(() => {
    deployModule = new DeployModule();
  });

  it('should create an instance', () => {
    expect(deployModule).toBeTruthy();
  });
});
