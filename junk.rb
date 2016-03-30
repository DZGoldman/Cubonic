require 'pry'
@puzzles = [1,5,3,5,6,9,3,5,3]
len= @puzzles.length
found = true
while found
  found = false
  @puzzles.each_with_index do |puzzle, i|
    break if i == len-1

    next_puzzle_num = @puzzles[i+1]

    if puzzle > next_puzzle_num
      found=true
      @puzzles[i], @puzzles[i+1] = @puzzles[i+1], @puzzles[i]

    end
  end
end

binding.pry
