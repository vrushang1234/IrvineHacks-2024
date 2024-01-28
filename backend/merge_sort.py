import temp
def test_merge_sort():
    assert temp.merge_sort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]) == [1, 1, 2, 3, 3, 4, 5, 5, 6, 9],"Test failed"
    assert temp.merge_sort([9, 8, 7, 6, 5, 4, 3, 2, 1]) == [1, 2, 3, 4, 5, 6, 7, 8, 9],"Test failed"
    assert temp.merge_sort([5, 2, 9, 1, 5, 6]) == [1, 2, 5, 5, 6, 9],"Test failed"
    assert temp.merge_sort([1, 2, 3, 4, 5]) == [1, 2, 3, 4, 5],"Test failed"
    assert temp.merge_sort([5, 4, 3, 2, 1]) == [1, 2, 3, 4, 5],"Test failed"
    assert temp.merge_sort([]) == [],"Test failed"
