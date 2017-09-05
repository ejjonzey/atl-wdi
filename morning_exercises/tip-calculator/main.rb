# asking for subtotal
<<<<<<< HEAD
puts "What is your subtotal?"
subtotal = gets.chomp

puts subtotal

puts "How many people in your party?"
people = gets.chomp

puts people

puts "How much of a tip would you like to leave?"
puts "A = 15%"
puts "B = 18%"
puts "C = 20%"
puts "D = other"
option = STDIN.gets.chomp.upcase

if option.upcase == "A"
  tip_percent = 0.15
elsif option.upcase == "B"
  tip_percent = 0.18
elsif option.upcase == "C"
  tip_percent = 0.20
elsif option.upcase == "D"
  puts "Let me choose?  That'll be 50%!"
  tip_percent = 0.50
end
puts tip_percent

puts "What is your tax percentage?"
tax_percent = gets.chomp.to_f
puts tax_percent

tax_value = subtotal * (tax_percent/100.0)

puts "Tax value is #{tax_value}"
puts tax_value

tip_value = subtotal * tip_percent
total = subtotal + tax_value + tip_value
total_per_person = total/people

puts "total is  #{total}"
puts "Each person owes #{total_per_person}"
=======
>>>>>>> cd4f1a7af57532a6bba617291e0cd336deb38518

# meal_with_tax = subtotal + tax_value

# total_value = meal_with_tax * tip_percent/100
# total = meal_with_tax + tip_value
