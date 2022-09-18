export default interface IParallaxYOptions {
  readonly scrollBlock?: string;
  readonly elem: string;
  readonly power: number;
  readonly startFrom?: number;
  readonly finishAfter?: number;
  readonly initialTranslateY?: number;
  readonly throttle?: number;
}
