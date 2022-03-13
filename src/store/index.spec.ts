import { cleanup } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { setBackground, setFetchUsers, useBackgroundStore, useUsersStore } from ".";

describe("useBackgroundStore", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    cleanup();
  });

  it("should have an INITIAL STATE of { background: '' }", () => {
    const { result } = renderHook(() => useBackgroundStore((state) => state));

    expect(result.current.background).toEqual("");
  });

  it("should set the STATE to { background: 'FAFAFA' } when setBackground is called", () => {
    const { result } = renderHook(() => useBackgroundStore((state) => state));

    act(() => {
      setBackground("FAFAFA");
    });

    expect(result.current.background).toEqual("FAFAFA");
  });
});

describe("useUsersStore", () => {
  beforeEach(() => {
    jest.resetAllMocks();
    cleanup();
  });
  it("should have an INITIAL STATE of {  isSuccess: false, isLoading: false isError: false, data: undefined,error: undefined }", () => {
    const { result } = renderHook(() => useUsersStore((state) => state));

    expect(result.current.data).toEqual(undefined);
    expect(result.current.error).toEqual(undefined);

    expect(result.current.isError).toEqual(false);
    expect(result.current.isLoading).toEqual(false);
    expect(result.current.isSuccess).toEqual(false);
  });

  it("should set the STATE of {  isSuccess: false, isLoading: true isError: false, data: undefined,error: undefined } when fetch is not yet resolved and setFetchUsers is called", () => {
    const { result } = renderHook(() => useUsersStore((state) => state));

    act(() => {
      setFetchUsers(1, 2);
    });

    expect(result.current.data).toEqual(undefined);
    expect(result.current.error).toEqual(undefined);

    expect(result.current.isError).toEqual(false);
    expect(result.current.isLoading).toEqual(true);
    expect(result.current.isSuccess).toEqual(false);
  });

  /** This can be tested further but it get a bit weird since, we have
   *  an async action, that contains "fetch", hence, either we need to
   *  mock it individually each time, or use something like MSW, but I will
   *  refrain from introducing more packages at this point.
   */
});
