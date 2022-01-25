cmake_minimum_required(VERSION 3.10)

add_subdirectory(sleepy-discord/)

project(ServerBot)

add_executable(ServerBot main.cpp)

target_link_libraries(ServerBot sleepy-discord)

target_include_directories(ServerBot PRIVATE sleepy-discord)
